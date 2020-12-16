"use strict";
const mysql = require("mysql");
const md5 = require('md5');
const { fromPairs } = require("lodash");

let pool;
let config = {
    connectionLimit: 500,
    host: "localhost",
    user: "root",
    password: "123456",
    database: "diem_danh",
};
function query(query = "", params = {}) {
    pool = pool ? pool : mysql.createPool(config);
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, results, fields) => {
            if (error) return reject(error);
            results = JSON.parse(JSON.stringify(results));
            resolve(results);
        });
    });
}

async function main() {
    let sql_select = `select * from user`;
    let user = await query(sql_select);
    for(let item of user){
        let pass = md5(item.username+item.username);
        await query(`update user set password = ? where id =?`,[pass, item.id])
    }
    // console.log(user)
}
main();
