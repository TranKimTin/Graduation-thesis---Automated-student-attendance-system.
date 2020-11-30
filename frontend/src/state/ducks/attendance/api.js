import axios from '../../../util/axios';
import { BACKEND_URL } from '../../../config'

function checkResult(result) {
    if (result.status === 'error')
        return Promise.reject(result);
    else
        return result;
}

function getOptionSectionClass(params = {}) {
    let url = `${BACKEND_URL}/api/attendance/option-section-class`;
    return axios.get(url, params).then(
        result => checkResult(result)
    );
}

function getAttendance(params = {}) {
    let url = `${BACKEND_URL}/api/attendance/${params.id_section_class}`;
    return axios.get(url).then(
        result => checkResult(result)
    );
}

function attendande(params = {}) {
    let url = `${BACKEND_URL}/api/attendance/${params.id_student}/${params.id_schedule}`;
    return axios.post(url, params).then(
        result => checkResult(result)
    );
}

export default {
    getOptionSectionClass,
    getAttendance,
    attendande
};