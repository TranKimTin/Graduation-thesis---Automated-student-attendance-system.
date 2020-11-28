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

export default {
    getUser
};