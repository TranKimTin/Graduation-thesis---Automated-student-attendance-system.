import type from './types';
import { toastr } from "react-redux-toastr";
import api from './api';

const getOptionSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getOptionSectionClass(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};

const getAttendance = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getAttendance(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};

const attendande = (params, params2) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.attendande(params)
            .then(result => {
                toastr.success("Điểm danh thành công");
                dispatch(getAttendance(params2));
            })
            .catch(error => toastr.error(error.message));
    };
};

export default {
    getOptionSectionClass,
    getAttendance,
    attendande
};