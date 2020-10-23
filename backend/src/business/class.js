'use strict';
import * as mysql from '../lib/mysql_connector';
export async function test(){
    return "test";
}

export async function getClass(){
    let sql_select = `SELECT * FROM class`;
    let sql_count = `SELECT count(1) AS count FROM class`;
    console.log(sql_select);
    let [data, [{count}]] = await Promise.all([
        mysql.query(sql_select),
        mysql.query(sql_count)
    ]);
    console.log(data)
    return {
        data,
        count
    };
}