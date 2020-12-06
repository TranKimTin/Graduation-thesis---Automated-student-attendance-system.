'use strict';
import * as Attendance from '../business/attendance';
import * as Validate from '../lib/validate';

export async function getOptionSectionClass(req, res, next) {
    try {
        let { user } = req;
        if (!(user.role_code === 'ROLE_ADMIN' || user.role_code === 'ROLE_TEACHER')) {
            throw { message: 'Không có quyền truy cập', code: 403 }
        }
        let response = await Attendance.getOptionSectionClass({ user });
        res.sendJson({
            data: response.data,
            options: response.options
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function getAttendance(req, res, next) {
    try {
        let id_section_class = req.params.id_section_class * 1;
        let pageSize = req.query.pageSize * 1 || 25;
        let pageIndex = req.query.pageIndex * 1 || 1;
        let search = req.query.search || '';
        let paging = {
            pageSize: pageSize,
            pageIndex: pageIndex,
            totalPage: 0
        };
        search = `%${search}%`;
        let value = await Validate.validateGet({ pageSize, pageIndex, search, id_section_class })
        let response = await Attendance.getAttendance(value);
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

export async function attendance(req, res, next) {
    try {
        let { user } = req;
        let id_student = req.params.id_student * 1;
        let id_schedule = req.params.id_schedule * 1;
        let id_teacher = user.id_teacher || null;
        let value = await Validate.attendance({ id_student, id_schedule, id_teacher });
        let response = await Attendance.attendance(value);
        res.sendJson({
            data: response.data,
            options: response.options
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function getCurrentSectionClass(req, res, next) {
    try {
        let { user } = req;
        let response = await Attendance.getCurrentSectionClass({user});
        res.sendJson({
            data: response
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}