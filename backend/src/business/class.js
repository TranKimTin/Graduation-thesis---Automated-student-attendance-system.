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
    return await mysql.query(`INSERT INTO class(class_code, class_name) VALUES ?`,[args])
}

export async function updateClass(args) {
    return await mysql.query(`UPDATE class SET class_code = ?, class_name = ? WHERE id = ?`,args)
}

export async function deleteClass(args) {
    let {classCode} = args;
    return await mysql.query(`DELETE FROM CLASS WHERE class_code = ?`,[classCode])
}
