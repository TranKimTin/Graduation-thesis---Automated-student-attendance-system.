'use strict';
import mysql from 'mysql';

let pool;

export function init(config) {
    pool = pool ? pool : mysql.createPool(config);
    return pool;
}

export function getConnection() {
    return new Promise((resolve, reject) => {
        if (!pool) return reject(new AppError('pool is not ready', 'E101'));
        pool.getConnection((err, connection) => {
            if (err) return reject(err);
            else resolve(connection);
        });
    });
}

export function query(query = '', params = {}) {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, results, fields) => {
            if (error) return reject(error);
            results = JSON.parse(JSON.stringify(results));
            resolve(results);
        });
    });
}

export function query_transaction(connection, query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, rows) => {
            if (err) {
                connection.rollback();
                return reject(err);
            } else {
                resolve(rows);
            }
        })
    });
}

export const lib = mysql;