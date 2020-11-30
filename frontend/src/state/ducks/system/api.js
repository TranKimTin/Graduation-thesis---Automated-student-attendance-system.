import axios from '../../../util/axios';
import { BACKEND_URL } from '../../../config'

function checkResult(result) {
    if (result.status === 'error')
        return Promise.reject(result);
    else
        return result;
}

function getUser(params = {}) {
    let url = `${BACKEND_URL}/api/system/user`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function insertUser(params = {}) {
    let url = `${BACKEND_URL}/api/system/user`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

function updateUser(params = {}) {
    let url = `${BACKEND_URL}/api/system/user`;
    return axios.put(url, params).then(
        result => checkResult(result)
    );
}

function deleteUser(params = {}) {
    let url = `${BACKEND_URL}/api/system/user`;
    return axios.delete(url, params).then(
        result => checkResult(result)
    );
}

export default {
    getUser,
    insertUser,
    updateUser,
    deleteUser
};