import axios from '../../../util/axios';
import {BACKEND_URL} from '../../../config'

function checkResult(result) {
    if (result.status === 'error')
        return Promise.reject(result);
    else
        return result;
}

///////////////////SECTION_CLASS///////////////////////////////////
function getSectionClass(params = {}) {
    let url = `${BACKEND_URL}/api/configure/section-class`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertSectionClass(params = {}) {
    let url = `${BACKEND_URL}/api/configure/section-class`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function importSectionClass(params = {}) {
    let url = `${BACKEND_URL}/api/configure/import-section-class`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateSectionClass(params = {}) {
    let url = `${BACKEND_URL}/api/configure/section-class`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteSectionClass(params = {}) {
    let url = `${BACKEND_URL}/api/configure/section-class`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

///////////////////////////STUDY//////////////////////////
function getStudy(params = {}) {
    let url = `${BACKEND_URL}/api/configure/study`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertStudy(params = {}) {
    let url = `${BACKEND_URL}/api/configure/study`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateStudy(params = {}) {
    let url = `${BACKEND_URL}/api/configure/study`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteStudy(params = {}) {
    let url = `${BACKEND_URL}/api/configure/study`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

///////////////////////TEACH//////////////////////////
function getTeach(params = {}) {
    let url = `${BACKEND_URL}/api/configure/teach`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertTeach(params = {}) {
    let url = `${BACKEND_URL}/api/configure/teach`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateTeach(params = {}) {
    let url = `${BACKEND_URL}/api/configure/teach`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteTeach(params = {}) {
    let url = `${BACKEND_URL}/api/configure/teach`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}
export default {
    getSectionClass,
    insertSectionClass,
    importSectionClass,
    updateSectionClass,
    deleteSectionClass,
    getStudy,
    insertStudy,
    updateStudy,
    deleteStudy,
    getTeach,
    insertTeach,
    updateTeach,
    deleteTeach
};