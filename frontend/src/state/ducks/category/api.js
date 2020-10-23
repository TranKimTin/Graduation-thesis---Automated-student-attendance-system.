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

export default {
    getClass
};