'use strict';
import * as Class from '../business/class';

export async function test(req, res, next) {
    try {
        let response = await Class.test();
        res.sendJson({
            data: response
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({code: error.code, message: error.message || undefined});
    }
}

export async function getClass(req, res, next) {
    try {
        let response = await Class.getClass();
        let paging = {
            pageSize: 25,
            pageIndex: 1,
            totalPage: Math.ceil(response.count/25)
        };
        res.sendJson({
            data: response.data,
            paging
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({code: error.code, message: error.message || undefined});
    }
}