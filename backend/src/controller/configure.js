'use strict';
import * as Configure from '../business/configure';
import moment from 'moment';
import * as Validate from '../lib/validate';

/////////////////////SECTION_CLASS//////////////////////
export async function getSectionClass(req, res, next) {
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
        let response = await Configure.getSectionClass(value);
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

export async function insertSectionClass(req, res, next) {
    try {
        let { body } = req;
        let { schedule, sectionClass } = await Validate.insertSectionClass(body);
        let lesson = {
            1: ['07:00', '07:50'],
            2: ['07:55', '08:45'],
            3: ['08:50', '09:40'],
            4: ['09:45', '10:35'],
            5: ['10:40', '11:30'],
            6: ['11:35', '12:25'],
            7: ['12:55', '13:45'],
            8: ['13:50', '14:40'],
            9: ['14:45', '15:35'],
            10: ['15:40', '16:30'],
            11: ['16:35', '17:25'],
            12: ['17:30', '18:20'],
        };
        let listSchedule = [];
        for (let item of schedule) {
            let startTime = moment(`${item.startDate}T${lesson[item.startLesson * 1][0]}+07:00`);
            let endTime = moment(`${item.startDate}T${lesson[item.endLesson * 1][1]}+07:00`);
            for (let i = 0; i < item.numberWeeks * 1; i++) {
                listSchedule.push([moment(startTime).format('YYYY-MM-DD HH:mm:SS'), moment(endTime).format('YYYY-MM-DD HH:mm:SS')]);
                startTime.add(1, 'week');
                endTime.add(1, 'week');
            }
        }
        let response = await Configure.insertSectionClass({ listSchedule, sectionClass });
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function importSectionClass(req, res, next) {
    try {
        let { body } = req;
        let response = await Configure.importSectionClass(body);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateSectionClass(req, res, next) {
    try {
        let { body } = req;
        let { schedule, sectionClass } = await Validate.updateSectionClass(body);
        let lesson = {
            1: ['07:00', '07:50'],
            2: ['07:55', '08:45'],
            3: ['08:50', '09:40'],
            4: ['09:45', '10:35'],
            5: ['10:40', '11:30'],
            6: ['11:35', '12:25'],
            7: ['12:55', '13:45'],
            8: ['13:50', '14:40'],
            9: ['14:45', '15:35'],
            10: ['15:40', '16:30'],
            11: ['16:35', '17:25'],
            12: ['17:30', '18:20'],
        };
        let listSchedule = [];
        for (let item of schedule) {
            let startTime = moment(`${item.startDate}T${lesson[item.startLesson * 1][0]}+07:00`);
            let endTime = moment(`${item.startDate}T${lesson[item.endLesson * 1][1]}+07:00`);
            for (let i = 0; i < item.numberWeeks * 1; i++) {
                listSchedule.push([sectionClass[5], moment(startTime).format('YYYY-MM-DD HH:mm:SS'), moment(endTime).format('YYYY-MM-DD HH:mm:SS')]);
                startTime.add(1, 'week');
                endTime.add(1, 'week');
            }
        }
        let response = await Configure.updateSectionClass({ listSchedule, sectionClass });
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteSectionClass(req, res, next) {
    try {
        let { data } = req.query;
        let value = await Validate.validateListCode(data)
        let response = await Configure.deleteSectionClass(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

///////////////////////STUDY////////////////////////
export async function getStudy(req, res, next) {
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
        let response = await Configure.getStudy(value);
        paging.totalPage = Math.ceil(response.count / paging.pageSize);
        res.sendJson({
            data: response.data,
            paging,
            options: response.options
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function insertStudy(req, res, next) {
    try {
        let { body } = req;
        let value = await Validate.insertStudy(body);
        let response = await Configure.insertStudy(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateStudy(req, res, next) {
    try {
        let { body } = req;
        let value = await Validate.updateStudy(body);
        let response = await Configure.updateStudy(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteStudy(req, res, next) {
    try {
        let { data } = req.query;
        data = JSON.parse(data);
        let value = await Validate.deleteStudy(data);
        let response = await Configure.deleteStudy(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

/////////////////////TEACH/////////////////////////////////
export async function getTeach(req, res, next) {
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
        let response = await Configure.getTeach(value);
        paging.totalPage = Math.ceil(response.count / paging.pageSize);
        res.sendJson({
            data: response.data,
            paging,
            options: response.options
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function insertTeach(req, res, next) {
    try {
        let { body } = req;
        let value = await Validate.insertTeach(body);
        let response = await Configure.insertTeach(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function updateTeach(req, res, next) {
    try {
        let { body } = req;
        let value = await Validate.updateTeach(body);
        let response = await Configure.updateTeach(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}

export async function deleteTeach(req, res, next) {
    try {
        let { data } = req.query;
        data = JSON.parse(data);
        let value = await Validate.deleteTeach(data);
        let response = await Configure.deleteTeach(value);
        res.sendJson({
            data: response.data
        });
    } catch (error) {
        console.error(error.message);
        res.sendError({ code: error.code, message: error.message || undefined });
    }
}