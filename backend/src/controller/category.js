'use strict';
import * as Category from '../business/category';
import * as Validate from '../lib/validate';

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
        let value = await Validate.validateGet({ pageSize, pageIndex, search });
        let response = await Category.getClass(value);
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
        let value = await Validate.insertCategory(body);
        let response = await Category.insertClass(value);
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
        let value = await Validate.updateCategory(body);
        let response = await Category.updateClass(value);
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
        let value = await Validate.validateListCode(data);
        let response = await Category.deleteClass(value);
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
        let value = await Validate.validateGet({ pageSize, pageIndex, search });
        let response = await Category.getStudent(value);
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
        let value = await Validate.insertStudent(body);
        let response = await Category.insertStudent(value);
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
        let value = await Validate.updateStudent(body);
        let response = await Category.updateStudent(value);
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
        let value = await Validate.validateListCode(data);
        let response = await Category.deleteStudent(value);
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
        let value = await Validate.validateGet({ pageSize, pageIndex, search });
        let response = await Category.getTeacher(value);
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
        let value = await Validate.insertTeacher(body);
        let response = await Category.insertTeacher(value);
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
        let value = await Validate.updateTeacher(body);
        let response = await Category.updateTeacher(value);
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
        let value = await Validate.validateListCode(data);
        let response = await Category.deleteTeacher(value);
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
        let value = await Validate.validateGet({ pageSize, pageIndex, search });
        let response = await Category.getSubject(value);
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
        let value = await Validate.insertCategory(body);
        let response = await Category.insertSubject(value);
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
        let value = await Validate.updateCategory(body);
        let response = await Category.updateSubject(value);
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
        let value = await Validate.validateListCode(data);
        let response = await Category.deleteSubject(value);
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
        let value = await Validate.validateGet({ pageSize, pageIndex, search });
        let response = await Category.getYear(value);
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
        let value = await Validate.insertCategory(body);
        let response = await Category.insertYear(value);
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
        let value = await Validate.updateCategory(body);
        let response = await Category.updateYear(value);
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
        let value = await Validate.validateListCode(data);
        let response = await Category.deleteYear(value);
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
        let value = await Validate.validateGet({ pageSize, pageIndex, search });
        let response = await Category.getSemester(value);
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
        let value = await Validate.insertCategory(body);
        let response = await Category.insertSemester(value);
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
        let value = await Validate.updateCategory(body);
        let response = await Category.updateSemester(value);
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
        let value = await Validate.validateListCode(data);
        let response = await Category.deleteSemester(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}