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
export default {
    getSectionClass,
    insertSectionClass,
    updateSectionClass,
    deleteSectionClass,
    getStudy,
    insertStudy
};