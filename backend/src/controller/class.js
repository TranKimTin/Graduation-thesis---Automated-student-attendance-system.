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
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function getClass(req, res, next) {
    try {
        let response = await Class.getClass();
        let paging = {
            pageSize: 25,
            pageIndex: 1,
            totalPage: Math.ceil(response.count / 25)
        };
        res.sendJson({
            data: response.data,
            paging
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function insertClass(req, res, next) {
    try {
        let { body } = req;
        let response = await Class.insertClass(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateClass(req, res, next) {
    try {
        let {body} = req;
        let response = await Class.updateClass(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteClass(req, res, next) {
    try {
        let {classCode} = req.params;
        let response = await Class.deleteClass({classCode});
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}