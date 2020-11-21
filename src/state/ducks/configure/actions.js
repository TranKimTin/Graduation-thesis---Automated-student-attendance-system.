import type from './types';
import { toastr } from "react-redux-toastr";
import api from './api';

const openModal = (params) => {
    return function (dispatch) {
        return dispatch({ type: type.OPEN_MODAL, data: params });
    };
};

const closeModal = () => {
    return function (dispatch) {
        return dispatch({ type: type.CLOSE_MODAL });
    };
};

const openModalDelete = () => {
    return function (dispatch) {
        return dispatch({ type: type.OPEN_MODAL_DELETE });
    };
};

const closeModalDelete = () => {
    return function (dispatch) {
        return dispatch({ type: type.CLOSE_MODAL_DELETE });
    };
};

const changeValue = (params) => {
    return function (dispatch) {
        return dispatch({ type: type.CHANGE_VALUE, data: params });
    };
};

////////////////////SECTION_CLASS/////////////////////////////////
const getSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getSectionClass(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};

const insertSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertSectionClass(params)
            .then(result => {
                toastr.success("Thêm lớp học phần thành công");
                dispatch(getSectionClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateSectionClass(params)
            .then(result => {
                toastr.success("Sửa lớp học phần thành công");
                dispatch(getSectionClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteSectionClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteSectionClass(params)
            .then(result => {
                toastr.success("Xóa lớp học phần thành công");
                dispatch(getSectionClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

////////////////////STUDY//////////////////////
const getStudy = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getStudy(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};

const insertStudy = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertStudy(params)
            .then(result => {
                toastr.success("Đăng ký học thành công");
                dispatch(getStudy());
            })
            .catch(error => toastr.error(error.message));
    };
};

export default {
    openModal,
    closeModal,
    changeValue,
    openModalDelete,
    closeModalDelete,
    getSectionClass,
    insertSectionClass,
    updateSectionClass,
    deleteSectionClass,
    getStudy,
    insertStudy
};