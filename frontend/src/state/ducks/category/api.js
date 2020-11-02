import axios from '../../../util/axios';
import {BACKEND_URL} from '../../../config'

function checkResult(result) {
    if (result.status === 'error')
        return Promise.reject(result);
    else
        return result;
}

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
    let url = `${BACKEND_URL}/api/class/${params.id}`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteClass(params = {}) {
    let url = `${BACKEND_URL}/api/class/${params.classCode}`;
    return axios.delete(url).then(
        result => checkResult(result)
    );
}

export default {
    getClass,
    insertClass,
    deleteClass,
    updateClass
};