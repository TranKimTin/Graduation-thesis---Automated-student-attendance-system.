'use strict';
import * as Category from '../business/category';

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
        let response = await Category.getClass({ pageSize, pageIndex, search });
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
        let response = await Category.insertClass(body);
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
        let response = await Category.updateClass(body);
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
        let response = await Category.deleteClass(data);
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
        let response = await Category.getStudent({ pageSize, pageIndex, search });
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
        let response = await Category.insertStudent(body);
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
        let response = await Category.updateStudent(body);
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
        let response = await Category.deleteStudent(data);
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
        let response = await Category.getTeacher({ pageSize, pageIndex, search });
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
        let response = await Category.insertTeacher(body);
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
        let response = await Category.updateTeacher(body);
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
        let response = await Category.deleteTeacher(data);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

////////////////////SUBJECT/////////////////////////////////////////
export async function getSubject(req, res, next) {
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
        let response = await Category.getSubject({ pageSize, pageIndex, search });
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

export async function insertSubject(req, res, next) {
    try {
        let { body } = req;
        let response = await Category.insertSubject(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateSubject(req, res, next) {
    try {
        let { body } = req;
        let response = await Category.updateSubject(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteSubject(req, res, next) {
    try {
        let { data } = req.query;
        let response = await Category.deleteSubject(data);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

/////////////////////YEAR///////////////////////////////////////
export async function getYear(req, res, next) {
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
        let response = await Category.getYear({ pageSize, pageIndex, search });
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

export async function insertYear(req, res, next) {
    try {
        let { body } = req;
        let response = await Category.insertYear(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateYear(req, res, next) {
    try {
        let { body } = req;
        let response = await Category.updateYear(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteYear(req, res, next) {
    try {
        let { data } = req.query;
        let response = await Category.deleteYear(data);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

//////////////////////SEMESTER//////////////////////////////////
export async function getSemester(req, res, next) {
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
        let response = await Category.getSemester({ pageSize, pageIndex, search });
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

export async function insertSemester(req, res, next) {
    try {
        let { body } = req;
        let response = await Category.insertSemester(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateSemester(req, res, next) {
    try {
        let { body } = req;
        let response = await Category.updateSemester(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteSemester(req, res, next) {
    try {
        let { data } = req.query;
        let response = await Category.deleteSemester(data);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}