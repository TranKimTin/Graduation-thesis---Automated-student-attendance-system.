"use strict";
import * as mysql from "../lib/mysql_connector";
export async function test() {
    return "test";
}

export async function getClass() {
    let sql_select = `SELECT * FROM class`;
    let sql_count = `SELECT count(1) AS count FROM class`;
    let [data, [{ count }]] = await Promise.all([
        mysql.query(sql_select),
        mysql.query(sql_count),
    ]);
    return {
        data,
        count,
    };
}

export async function insertClass(args) {
    let {className, classCode} = args;
    return await mysql.query(`INSERT INTO class(class_name, class_code) VALUES (?,?)`,[className, classCode])
}

export async function updateClass(args) {
    let {classCode, className, id} = args;
    return await mysql.query(`UPDATE class SET class_code = ?, class_name = ? WHERE id = ?`,[classCode, className, id])
}

export async function deleteClass(args) {
    let {classCode} = args;
    return await mysql.query(`DELETE FROM CLASS WHERE class_code = ?`,[classCode])
}
