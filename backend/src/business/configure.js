"use strict";
import * as mysql from "../lib/mysql_connector";
import _ from 'lodash';
import moment from "moment";

///////////////////////SECTION_CLASS///////////////////////////
export async function getSectionClass(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT sc.id, sc.section_class_name, sc.section_class_code, s.subject_name, s.subject_code, 
                            y.year_name, y.year_code, smt.semester_name, smt.semester_code,
                            JSON_ARRAYAGG(JSON_OBJECT("start_time", scd.start_time, "end_time", scd.end_time)) AS schedule
                        FROM section_class sc
                        JOIN subject s ON sc.id_subject = s.id
                        JOIN year y ON sc.id_year = y.id
                        JOIN semester smt ON sc.id_semester = smt.id
                        LEFT JOIN schedule scd ON scd.id_section_class = sc.id
                        WHERE sc.section_class_name LIKE ? OR sc.section_class_code like ?
                        GROUP BY sc.id, sc.section_class_name, sc.section_class_code, s.subject_name, s.subject_code, y.year_name, y.year_code, smt.semester_name, smt.semester_code
                        ORDER BY y.year_name desc, smt.semester_name desc, sc.section_class_name asc
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) as count 
                        FROM section_class sc
                        JOIN subject s ON sc.id_subject = s.id
                        JOIN year y ON sc.id_year = y.id
                        JOIN semester smt ON sc.id_semester = smt.id 
                        WHERE sc.section_class_name LIKE ? OR sc.section_class_code like ?`;
    let sql_select_subject = `SELECT subject_name, subject_code 
                                FROM subject 
                                ORDER BY subject_name`;
    let sql_select_year = `SELECT year_name, year_code 
                                FROM year 
                                ORDER BY year_name`;
    let sql_select_semester = `SELECT semester_name, semester_code 
                                FROM semester 
                                ORDER BY semester_name`;
    let [data, [{ count }], optionSubject, optionYear, optionSemester] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
        mysql.query(sql_select_subject, []),
        mysql.query(sql_select_year, []),
        mysql.query(sql_select_semester, [])
    ]);
    let lesson = { "07:00": 1, "07:50": 1, "07:55": 2, "08:45": 2, "08:50": 3, "09:40": 3, "09:45": 4, "10:35": 4, "10:40": 5, "11:30": 5, "11:35": 6, "12:25": 6, "12:55": 7, "13:45": 7, "13:50": 8, "14:40": 8, "14:45": 9, "15:35": 9, "15:40": 10, "16:30": 10, "16:35": 11, "17:25": 11, "17:30": 12, "18:20": 12 };
    for (let item of data) {
        item.schedule = JSON.parse(item.schedule)
            .filter(item => item.start_time !== null && item.end_time !== null)
            .sort((a, b) => (new Date(a.start_time)).getTime() - (new Date(b.start_time)).getTime())
            .reduce((a, b) => {
                let date = b.start_time.slice(0, 10);
                let check = false;
                for (let i of a) {
                    if (Math.abs(moment(b.start_time).diff(moment(i.d), 'day')) % 7 == 0) {
                        i.numberWeeks++;
                        check = true;
                        break;
                    }
                }
                if (!check) {
                    let startLesson = lesson[b.start_time.slice(11, 16)];
                    let endLesson = lesson[b.end_time.slice(11, 16)];
                    a.push({
                        d: b.start_time,
                        startDate: date,
                        startLesson,
                        endLesson,
                        numberWeeks: 1
                    });
                }
                return a;
            }, [])
            .map(item => {
                delete item['d'];
                return item;
            });
    }
    return {
        data,
        options: {
            optionSubject,
            optionYear,
            optionSemester
        },
        count,
    };
}

export async function insertSectionClass(args) {
    let { sectionClass = [], listSchedule = [] } = args;
    let [subject_id, year_id, semester_id] = await Promise.all([
        mysql.query(`SELECT id, subject_code FROM subject`),
        mysql.query(`SELECT id, year_code FROM year`),
        mysql.query(`SELECT id, semester_code FROM semester`)
    ]);

    subject_id = subject_id.reduce((a, b) => {
        a[b.subject_code] = b.id;
        return a;
    }, {});

    year_id = year_id.reduce((a, b) => {
        a[b.year_code] = b.id;
        return a;
    }, {});

    semester_id = semester_id.reduce((a, b) => {
        a[b.semester_code] = b.id;
        return a;
    }, {});

    for (let item of sectionClass) {
        item[2] = subject_id[item[2]];  //item[2]: id_subject
        item[3] = year_id[item[3]];  //item[3]: id_year
        item[4] = semester_id[item[4]];  //item[4]: id_semester
    }
    let id = await mysql.query(`INSERT INTO section_class(section_class_name, section_class_code, id_subject, id_year, id_semester) VALUES ?`, [sectionClass]);
    id = id.insertId;
    for (let item of listSchedule) {
        item.unshift(id);
    }
    return await mysql.query('INSERT INTO schedule(id_section_class, start_time, end_time) VALUES ?;', [listSchedule]);
}

export async function importSectionClass(args){
    console.log(args);
    let [id_subject, id_year, id_semester] = await Promise.all([
        mysql.query(`SELECT id, subject_code FROM subject`),
        mysql.query(`SELECT id, year_code FROM year`),
        mysql.query(`SELECT id, semester_code FROM semester`),
    ]);

    id_subject = id_subject.reduce((a, b) => {
        a[b.subject_code] = b.id;
        return a;
    }, {});

    id_year = id_year.reduce((a, b) => {
        a[b.year_code] = b.id;
        return a;
    }, {});

    id_semester = id_semester.reduce((a, b) => {
        a[b.semester_code] = b.id;
        return a;
    }, {});

    for (let item of args) {
        item[2] = id_subject[item[2]];  //item[2]: id_subject
        item[3] = id_year[item[3]];  //item[3]: id_year
        item[4] = id_semester[item[4]];  //item[4]: id_semester
    }
    return await mysql.query(`INSERT INTO section_class(section_class_code, section_class_name, id_subject, id_year, id_semester) VALUES ?`, [args]);
}

export async function updateSectionClass(args) {
    let { sectionClass = [], listSchedule = [] } = args;
    let [[{ subject_id }], [{ year_id }], [{ semester_id }]] = await Promise.all([
        mysql.query(`SELECT id AS subject_id from subject WHERE subject_code = ? limit 1`, sectionClass[2]),
        mysql.query(`SELECT id AS year_id from year WHERE year_code = ? limit 1`, sectionClass[3]),
        mysql.query(`SELECT id AS semester_id from semester WHERE semester_code = ? limit 1`, sectionClass[4])
    ]);
    sectionClass[2] = subject_id;
    sectionClass[3] = year_id;
    sectionClass[4] = semester_id;
    await mysql.query(`DELETE FROM schedule WHERE id_section_class = ?`, [sectionClass[5]]);
    await mysql.query('INSERT INTO schedule(id_section_class, start_time, end_time) VALUES ?;', [listSchedule]);
    return await mysql.query(`UPDATE section_class SET 
                                section_class_code = ?, section_class_name = ?, id_subject = ?, id_year = ?, id_semester = ? 
                                WHERE id = ?`, sectionClass);
}

export async function deleteSectionClass(args) {
    let id = await mysql.query(`SELECT id FROM section_class WHERE section_class_code IN (?)`, [args]);
    id = id.map(item => item.id);
    await mysql.query(`DELETE FROM schedule WHERE id_section_class IN (?)`, [id]);
    return await mysql.query(`DELETE FROM section_class WHERE section_class_code IN (?)`, [args]);
}

/////////////////////STUDY///////////////////////////////
export async function getStudy(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT sd.id_student, sd.id_section_class, st.student_name, st.student_code, sb.subject_name, sc.section_class_name,
                        sc.section_class_code, y.year_name, smt.semester_name, sd.id_student, sd.id_section_class
                        FROM student st
                        JOIN study sd ON sd.id_student = st.id
                        JOIN section_class sc ON sc.id = sd.id_section_class
                        JOIN subject sb ON sb.id = sc.id_subject
                        JOIN year y ON y.id = sc.id_year
                        JOIN semester smt ON smt.id = sc.id_semester
                        WHERE st.student_name like ? OR st.student_code like ?
                        ORDER BY  y.year_name desc, smt.semester_name desc, st.student_name asc, st.student_code asc
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) AS count 
                        FROM student st
                        JOIN study sd ON sd.id_student = st.id
                        JOIN section_class sc ON sc.id = sd.id_section_class
                        JOIN subject sb ON sb.id = sc.id_subject
                        JOIN year y ON y.id = sc.id_year
                        JOIN semester smt ON smt.id = sc.id_semester
                        WHERE st.student_name like ? OR st.student_code like ?`;
    let sql_select_student = `SELECT student_name, student_code 
                                FROM student 
                                ORDER BY student_name`;
    let sql_select_section_class = `SELECT section_class_name, section_class_code 
                                FROM section_class 
                                ORDER BY section_class_name`;
    let [data, [{ count }], optionStudent, optionSectionClass] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
        mysql.query(sql_select_student, []),
        mysql.query(sql_select_section_class, [])
    ]);
    return {
        data,
        count,
        options: { optionStudent, optionSectionClass }
    };
}

export async function insertStudy(args) {
    let [id_student, id_section_class] = await Promise.all([
        mysql.query(`SELECT id, student_code FROM student`),
        mysql.query(`SELECT id, section_class_code FROM section_class`),
    ]);

    id_student = id_student.reduce((a, b) => {
        a[b.student_code] = b.id;
        return a;
    }, {});

    id_section_class = id_section_class.reduce((a, b) => {
        a[b.section_class_code] = b.id;
        return a;
    }, {});

    for (let item of args) {
        item[0] = id_student[item[0]];  //item[0]: id_student
        item[1] = id_section_class[item[1]];  //item[1]: id_section_class
    }
    return await mysql.query(`INSERT INTO study(id_student, id_section_class) VALUES ?`, [args]);
}

export async function updateStudy(args) {
    let [[{ id_student }], [{ id_section_class }]] = await Promise.all([
        mysql.query(`SELECT id AS id_student from student WHERE student_code = ? limit 1`, args[0]),
        mysql.query(`SELECT id AS id_section_class from section_class WHERE section_class_code = ? limit 1`, args[1])

    ]);
    args[0] = id_student;
    args[1] = id_section_class;
    return await mysql.query(`UPDATE study SET id_student = ?, id_section_class = ? WHERE id_student = ? AND id_section_class = ?`, args);
}

export async function deleteStudy(args) {
    for (let item of args) {
        let [[{ id_student }], [{ id_section_class }]] = await Promise.all([
            mysql.query(`SELECT id AS id_student from student WHERE student_code = ? limit 1`, item[0]),
            mysql.query(`SELECT id AS id_section_class from section_class WHERE section_class_code = ? limit 1`, item[1])
        ]);
        await mysql.query(`DELETE FROM study WHERE id_student = ? AND id_section_class = ?`, [id_student, id_section_class]);
    }
    return [];
}

///////////////////////////////TEACH//////////////////////////////////////
export async function getTeach(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT teach.id_teacher, teach.id_section_class, t.teacher_name, t.teacher_code, sb.subject_name, sc.section_class_name,
                            sc.section_class_code, y.year_name, smt.semester_name
                        FROM teacher t
                        JOIN teach ON t.id = teach.id_teacher
                        JOIN section_class sc ON sc.id = teach.id_section_class
                        JOIN subject sb ON sb.id = sc.id_subject
                        JOIN year y ON y.id = sc.id_year
                        JOIN semester smt ON smt.id = sc.id_semester
                        WHERE t.teacher_name like ? OR t.teacher_code like ?
                        ORDER BY  y.year_name desc, smt.semester_name desc, t.teacher_name asc, t.teacher_code asc
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) AS count 
                        FROM teacher t
                        JOIN teach ON t.id = teach.id_teacher
                        JOIN section_class sc ON sc.id = teach.id_section_class
                        JOIN subject sb ON sb.id = sc.id_subject
                        JOIN year y ON y.id = sc.id_year
                        JOIN semester smt ON smt.id = sc.id_semester
                        WHERE t.teacher_name like ? OR t.teacher_code like ?`;
    let sql_select_teacher = `SELECT teacher_name, teacher_code 
                                FROM teacher 
                                ORDER BY teacher_name`;
    let sql_select_section_class = `SELECT section_class_name, section_class_code 
                                FROM section_class 
                                ORDER BY section_class_name`;
    let [data, [{ count }], optionTeacher, optionSectionClass] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
        mysql.query(sql_select_teacher, []),
        mysql.query(sql_select_section_class, [])
    ]);
    return {
        data,
        count,
        options: { optionTeacher, optionSectionClass }
    };
}

export async function insertTeach(args) {
   // return [];
    let [id_teacher, id_section_class] = await Promise.all([
        mysql.query(`SELECT id, teacher_code FROM teacher`),
        mysql.query(`SELECT id, section_class_code FROM section_class`),
    ]);

    id_teacher = id_teacher.reduce((a, b) => {
        a[b.teacher_code] = b.id;
        return a;
    }, {});

    id_section_class = id_section_class.reduce((a, b) => {
        a[b.section_class_code] = b.id;
        return a;
    }, {});

    for (let item of args) {
        item[0] = id_teacher[item[0]];  //item[0]: id_teacher
        item[1] = id_section_class[item[1]];  //item[1]: id_section_class
    }
    return await mysql.query(`INSERT INTO teach(id_teacher, id_section_class) VALUES ?`, [args]);
}

export async function updateTeach(args) {
    let [[{ id_teacher }], [{ id_section_class }]] = await Promise.all([
        mysql.query(`SELECT id AS id_teacher from teacher WHERE teacher_code = ? limit 1`, args[0]),
        mysql.query(`SELECT id AS id_section_class from section_class WHERE section_class_code = ? limit 1`, args[1])

    ]);
    args[0] = id_teacher;
    args[1] = id_section_class;
    return await mysql.query(`UPDATE teach SET id_teacher = ?, id_section_class = ? WHERE id_teacher = ? AND id_section_class = ?`, args);
}

export async function deleteTeach(args) {
    for (let item of args) {
        let [[{ id_teacher }], [{ id_section_class }]] = await Promise.all([
            mysql.query(`SELECT id AS id_teacher from teacher WHERE teacher_code = ? limit 1`, item[0]),
            mysql.query(`SELECT id AS id_section_class from section_class WHERE section_class_code = ? limit 1`, item[1])
        ]);
        await mysql.query(`DELETE FROM teach WHERE id_teacher = ? AND id_section_class = ?`, [id_teacher, id_section_class]);
    }
    return [];
}