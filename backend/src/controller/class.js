'use strict';
import * as Class from '../business/class';

/////////////////////CLASS////////////////////////////////////
export async function getClass(req, res, next) {
    try {
        let pageSize = req.query.pageSize * 1 || 25;
        let pageIndex = req.query.pageIndex * 1 || 1;
        let search = req.query.search || '';
        let paging = {
            pageSize: pageSize,
            pageIndex: pageIndex,
            totalPage: 0
        };
        search = `%${search}%`;
        let response = await Class.getClass({ pageSize, pageIndex, search });
        paging.totalPage = Math.ceil(response.count / paging.pageSize);
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
        let { body } = req;
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
        let { data } = req.query;
        let response = await Class.deleteClass(data);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

/////////////////////////STUDENT///////////////////////////////////////
export async function getStudent(req, res, next) {
    try {
        let pageSize = req.query.pageSize * 1 || 25;
        let pageIndex = req.query.pageIndex * 1 || 1;
        let search = req.query.search || '';
        let paging = {
            pageSize: pageSize,
            pageIndex: pageIndex,
            totalPage: 0
        };
        search = `%${search}%`;
        let response = await Class.getStudent({ pageSize, pageIndex, search });
        paging.totalPage = Math.ceil(response.count / paging.pageSize);
        res.sendJson({
            data: response.data,
            options: response.options,
            paging
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function insertStudent(req, res, next) {
    try {
        let { body } = req;
        let response = await Class.insertStudent(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateStudent(req, res, next) {
    try {
        let { body } = req;
        let response = await Class.updateStudent(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteStudent(req, res, next) {
    try {
        let { data } = req.query;
        let response = await Class.deleteStudent(data);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

//////////////////////TEACHER///////////////////////////////////////
export async function getTeacher(req, res, next) {
    try {
        let pageSize = req.query.pageSize * 1 || 25;
        let pageIndex = req.query.pageIndex * 1 || 1;
        let search = req.query.search || '';
        let paging = {
            pageSize: pageSize,
            pageIndex: pageIndex,
            totalPage: 0
        };
        search = `%${search}%`;
        let response = await Class.getTeacher({ pageSize, pageIndex, search });
        paging.totalPage = Math.ceil(response.count / paging.pageSize);
        res.sendJson({
            data: response.data,
            paging
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function insertTeacher(req, res, next) {
    try {
        let { body } = req;
        let response = await Class.insertTeacher(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateTeacher(req, res, next) {
    try {
        let { body } = req;
        let response = await Class.updateTeacher(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteTeacher(req, res, next) {
    try {
        let { data } = req.query;
        let response = await Class.deleteTeacher(data);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}