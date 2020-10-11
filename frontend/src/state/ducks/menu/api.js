import axios from '../../../util/axios';

function checkResult(result) {
    if (result.status === 'error')
        return Promise.reject(result);
    else
        return result;
}

export default {

}