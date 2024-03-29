"use strict";
import * as mysql from "../lib/mysql_connector";
import md5 from 'md5';

///////////////////////CLASS///////////////////////////
export async function getClass(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT * FROM class 
                        WHERE class_name LIKE ? OR class_code LIKE ? 
                        ORDER BY class_name
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) AS count FROM class 
                        WHERE class_name LIKE ? OR class_code LIKE ?`;
    let [data, [{ count }]] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
    ]);
    return {
        data,
        count,
    };
}

export async function insertClass(args) {
    return await mysql.query(`INSERT INTO class(class_code, class_name) VALUES ?`, [args]);
}

export async function updateClass(args) {
    return await mysql.query(`UPDATE class SET class_code = ?, class_name = ? WHERE id = ?`, args);
}

export async function deleteClass(args) {
    return await mysql.query(`DELETE FROM CLASS WHERE class_code IN (?)`, [args]);
}

////////////////////////STUDENT////////////////////////////////////
export async function getStudent(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT st.id, st.student_code, st.student_name, st.date_of_birth, st.gender, c.class_name, c.class_code
                        FROM student st
	                    JOIN class c ON st.class_id = c.id 
                        WHERE st.student_name LIKE ? OR st.student_code like ? 
                        ORDER BY st.student_name
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) as count FROM student st
                        JOIN class c ON st.class_id = c.id 
                        WHERE st.student_name LIKE ? OR st.student_code like ? `;
    let sql_select_class = `SELECT class_name, class_code 
                                FROM class 
                                ORDER BY class_name`;
    let [data, [{ count }], optionClass] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
        mysql.query(sql_select_class, [])
    ]);
    return {
        data,
        options: { optionClass },
        count,
    };
}

export async function insertStudent(args) {
    let class_id = await mysql.query(`SELECT id, class_code FROM class`);
    class_id = class_id.reduce((a, b) => {
        a[b.class_code] = b.id;
        return a;
    }, {})
    for (let item of args) {
        item[4] = class_id[item[4]];  //item[4]: class_code
    }
    let account = args.map(item => [item[0], md5(item[0] + item[0]), 3]);
    await mysql.query(`INSERT INTO student(student_code, student_name, date_of_birth, gender, class_id) VALUES ?`, [args]);
    await mysql.query(`INSERT INTO user(username, password, role) VALUE ?`, [account]);
    return [];
}

export async function updateStudent(args) {
    let [{ id }] = await mysql.query(`SELECT id from class WHERE class_code = ? limit 1`, args[4]);
    args[4] = id;
    return await mysql.query(`UPDATE student SET 
                                student_code = ?, student_name = ?, date_of_birth = ?, gender = ?, class_id = ? 
                                WHERE id = ?`, args);
}

export async function deleteStudent(args) {
    await mysql.query(`DELETE FROM student WHERE student_code IN (?)`, [args]);
    return await mysql.query(`DELETE FROM user WHERE username IN (?)`, [args]);
}

////////////////////////TEACHER/////////////////////////////////////
export async function getTeacher(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT * FROM teacher 
                        WHERE teacher_name LIKE ? OR teacher_code LIKE ? 
                        ORDER BY teacher_name
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) AS count FROM teacher 
                        WHERE teacher_name LIKE ? OR teacher_code LIKE ?`;
    let [data, [{ count }]] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
    ]);
    return {
        data,
        count,
    };
}

export async function insertTeacher(args) {
    let account = args.map(item => [item[0], md5(item[0] + item[0]), 2]);
    await mysql.query(`INSERT INTO teacher(teacher_code, teacher_name, date_of_birth, gender) VALUES ?`, [args]);
    await mysql.query(`INSERT INTO user(username, password, role) VALUE ?`, [account]);
    return [];
}

export async function updateTeacher(args) {
    return await mysql.query(`UPDATE teacher SET 
                                teacher_code = ?, teacher_name = ?, date_of_birth = ?, gender = ?
                                WHERE id = ?`, args);
}

export async function deleteTeacher(args) {
    await mysql.query(`DELETE FROM teacher WHERE teacher_code IN (?)`, [args]);
    return await mysql.query(`DELETE FROM user WHERE username IN (?)`, [args]);
}

////////////////////////////SUBJECT//////////////////////////////
export async function getSubject(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT * FROM subject 
                        WHERE subject_name LIKE ? OR subject_code LIKE ? 
                        ORDER BY subject_name
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) AS count FROM subject 
                        WHERE subject_name LIKE ? OR subject_code LIKE ?`;
    let [data, [{ count }]] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
    ]);
    return {
        data,
        count,
    };
}

export async function insertSubject(args) {
    return await mysql.query(`INSERT INTO subject(subject_code, subject_name) VALUES ?`, [args]);
}

export async function updateSubject(args) {
    return await mysql.query(`UPDATE subject SET 
                                subject_code = ?, subject_name = ?
                                WHERE id = ?`, args);
}

export async function deleteSubject(args) {
    return await mysql.query(`DELETE FROM subject WHERE subject_code IN (?)`, [args]);
}

/////////////////////////////YEAR/////////////////////////////////////////
export async function getYear(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT * FROM year 
                        WHERE year_name LIKE ? OR year_code LIKE ? 
                        ORDER BY year_name
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) AS count FROM year 
                        WHERE year_name LIKE ? OR year_code LIKE ?`;
    let [data, [{ count }]] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
    ]);
    return {
        data,
        count,
    };
}

export async function insertYear(args) {
    return await mysql.query(`INSERT INTO year(year_code, year_name) VALUES ?`, [args]);
}

export async function updateYear(args) {
    return await mysql.query(`UPDATE year SET 
                                year_code = ?, year_name = ?
                                WHERE id = ?`, args);
}

export async function deleteYear(args) {
    return await mysql.query(`DELETE FROM year WHERE year_code IN (?)`, [args]);
}

/////////////////////SEMESTER////////////////////////////
export async function getSemester(args) {
    let { pageSize, pageIndex, search } = args;
    let sql_select = `SELECT * FROM semester 
                        WHERE semester_name LIKE ? OR semester_code LIKE ? 
                        ORDER BY semester_name
                        LIMIT ? OFFSET ?`;
    let sql_count = `SELECT count(1) AS count FROM semester 
                        WHERE semester_name LIKE ? OR semester_code LIKE ?`;
    let [data, [{ count }]] = await Promise.all([
        mysql.query(sql_select, [search, search, pageSize, (pageIndex - 1) * pageSize]),
        mysql.query(sql_count, [search, search]),
    ]);
    return {
        data,
        count,
    };
}

export async function insertSemester(args) {
    return await mysql.query(`INSERT INTO semester(semester_code, semester_name) VALUES ?`, [args]);
}

export async function updateSemester(args) {
    return await mysql.query(`UPDATE semester SET 
                                semester_code = ?, semester_name = ?
                                WHERE id = ?`, args);
}

export async function deleteSemester(args) {
    return await mysql.query(`DELETE FROM semester WHERE semester_code IN (?)`, [args]);
}
