import axios from '../../../util/axios';
import { BACKEND_URL } from '../../../config'

function checkResult(result) {
    if (result.status === 'error')
        return Promise.reject(result);
    else
        return result;
}

function logout(params = {}) {
    let url = `${BACKEND_URL}/api/logout`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

export default {
    logout
};