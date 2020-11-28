'use strict';
import * as User from '../business/user';

export async function getToken(req, res, next) {
    try {
        let { username = '', password = '' } = req.body;
        let response = await User.getToken({ username, password });
        res.sendJson({
            data: response,
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function requireToken(req, res, next) {
    try {
        let access_token = req.headers["x-access-token"];
        let user = await User.requireToken({ access_token });
        req.user = user;
        next();
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message });
    }
}

export async function logout(req, res, next) {
    try {
        let access_token = req.headers["x-access-token"];
        let response = await User.logout({ access_token });
        res.sendJson({
            data: response,
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message });
    }
}

export async function requireRoleTeacher(req, res, next) {
    try {
        let { user = {} } = req;
        if (user.role_code !== 'ROLE_ADMIN' && user.role_code !== 'ROLE_TEACHER') {
            throw { message: 'Bạn không có quyền', code: 403 };
        }
        next();
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message });
    }
}

export async function requireRoleAdmin(req, res, next) {
    try {
        let { user = {} } = req;
        if (user.role_code !== 'ROLE_ADMIN') {
            throw { message: 'Bạn không có quyền', code: 403 };
        }
        next();
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message });
    }
}

export async function getUser(req, res, next) {
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
        let response = await User.getUser({ pageSize, pageIndex, search });
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