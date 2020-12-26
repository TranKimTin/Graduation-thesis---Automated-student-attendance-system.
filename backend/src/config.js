'use strict';

export default {
    mysql:{
        connectionLimit: 500,
        host: "localhost",
        user: "root",
        password: "123456",
        database: "diem_danh",
    },
    http:{
        port: 3001,
        host: "localhost"
    },
    jwt: {
        secret_key: '10 điểm đồ án',
        options: {
            expiresIn: 60*60*24, //giay
            algorithm: 'HS256'
        }
    } 
}