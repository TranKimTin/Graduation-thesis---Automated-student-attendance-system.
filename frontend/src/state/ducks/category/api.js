import axios from '../../../util/axios';
import {BACKEND_URL} from '../../../config'

function checkResult(result) {
    if (result.status === 'error')
        return Promise.reject(result);
    else
        return result;
}

///////////////////CLASS>///////////////////////////////////
function getClass(params = {}) {
    let url = `${BACKEND_URL}/api/class`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertClass(params = {}) {
    let url = `${BACKEND_URL}/api/class`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateClass(params = {}) {
    let url = `${BACKEND_URL}/api/class`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteClass(params = {}) {
    let url = `${BACKEND_URL}/api/class`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

//////////////////////STUDENT///////////////////////////
function getStudent(params = {}) {
    let url = `${BACKEND_URL}/api/student`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertStudent(params = {}) {
    let url = `${BACKEND_URL}/api/student`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateStudent(params = {}) {
    let url = `${BACKEND_URL}/api/student`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteStudent(params = {}) {
    let url = `${BACKEND_URL}/api/student`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

/////////////////////////////TEACHER//////////////////////////////////////
function getTeacher(params = {}) {
    let url = `${BACKEND_URL}/api/teacher`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertTeacher(params = {}) {
    let url = `${BACKEND_URL}/api/teacher`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateTeacher(params = {}) {
    let url = `${BACKEND_URL}/api/teacher`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteTeacher(params = {}) {
    let url = `${BACKEND_URL}/api/teacher`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

/////////////////SUBJECT///////////////////////////
function getSubject(params = {}) {
    let url = `${BACKEND_URL}/api/subject`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertSubject(params = {}) {
    let url = `${BACKEND_URL}/api/subject`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateSubject(params = {}) {
    let url = `${BACKEND_URL}/api/subject`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteSubject(params = {}) {
    let url = `${BACKEND_URL}/api/subject`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

///////////////////////YEAR//////////////////////////////
function getYear(params = {}) {
    let url = `${BACKEND_URL}/api/year`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertYear(params = {}) {
    let url = `${BACKEND_URL}/api/year`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateYear(params = {}) {
    let url = `${BACKEND_URL}/api/year`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteYear(params = {}) {
    let url = `${BACKEND_URL}/api/year`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

////////////////////SEMESTER////////////////////////////
function getSemester(params = {}) {
    let url = `${BACKEND_URL}/api/semester`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertSemester(params = {}) {
    let url = `${BACKEND_URL}/api/semester`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateSemester(params = {}) {
    let url = `${BACKEND_URL}/api/semester`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteSemester(params = {}) {
    let url = `${BACKEND_URL}/api/semester`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

export default {
    getClass,
    insertClass,
    deleteClass,
    updateClass,
    getStudent,
    insertStudent,
    insertTeacher,
    updateStudent,
    deleteStudent,
    getTeacher,
    updateTeacher,
    deleteTeacher,
    getSubject,
    insertSubject,
    updateSubject,
    deleteSubject,
    getYear,
    insertYear,
    updateYear,
    deleteYear,
    getSemester,
    insertSemester,
    updateSemester,
    deleteSemester
};