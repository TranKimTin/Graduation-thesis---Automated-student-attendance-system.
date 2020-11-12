import type from './types';
import { toastr } from "react-redux-toastr";
import api from './api';

const openModal = (params) => {
    return function (dispatch) {
        return dispatch({type:type.OPEN_MODAL, data: params});
    };
};

const closeModal = () => {
    return function (dispatch) {
        return dispatch({type:type.CLOSE_MODAL});
    };
};

const openModalDelete = () => {
    return function (dispatch) {
        return dispatch({type:type.OPEN_MODAL_DELETE});
    };
};

const closeModalDelete = () => {
    return function (dispatch) {
        return dispatch({type:type.CLOSE_MODAL_DELETE});
    };
};

const changeValue = (params) => {
    return function (dispatch) {
        return dispatch({type:type.CHANGE_VALUE, data: params});
    };
};

////////////////////CLASS/////////////////////////////////
const getClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.getClass(params)
            .then(result => dispatch({type: type.GET_DATA_SUCCESS, data: result}))
            .catch(error => toastr.error(error.message));
    };
};

const insertClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.insertClass(params)
            .then(result => {
                toastr.success("Thêm lớp thành công");
                dispatch(getClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.updateClass(params)
            .then(result => {
                toastr.success("Sửa lớp thành công");
                dispatch(getClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteClass = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.deleteClass(params)
            .then(result => {
                toastr.success("Xóa lớp thành công");
                dispatch(getClass());
            })
            .catch(error => toastr.error(error.message));
    };
};

//////////////////STUDENT////////////////////////////////

const getStudent = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.getStudent(params)
            .then(result => dispatch({type: type.GET_DATA_SUCCESS, data: result}))
            .catch(error => toastr.error(error.message));
    };
};

const insertStudent = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.insertStudent(params)
            .then(result => {
                toastr.success("Thêm sinh viên thành công");
                dispatch(getStudent());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateStudent = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.updateStudent(params)
            .then(result => {
                toastr.success("Sửa sinh viên thành công");
                dispatch(getStudent());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteStudent = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.deleteStudent(params)
            .then(result => {
                toastr.success("Xóa sinh viên thành công");
                dispatch(getStudent());
            })
            .catch(error => toastr.error(error.message));
    };
};

/////////////////////TEACHER/////////////////////////////////

const getTeacher = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.getTeacher(params)
            .then(result => dispatch({type: type.GET_DATA_SUCCESS, data: result}))
            .catch(error => toastr.error(error.message));
    };
};

const insertTeacher = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.insertTeacher(params)
            .then(result => {
                toastr.success("Thêm giảng viên thành công");
                dispatch(getTeacher());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateTeacher = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.updateTeacher(params)
            .then(result => {
                toastr.success("Sửa giảng viên thành công");
                dispatch(getTeacher());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteTeacher = (params) => {
    return function (dispatch) {
        dispatch({type: type.WAITTING_LOAD_DATA});
        return api.deleteTeacher(params)
            .then(result => {
                toastr.success("Xóa giảng viên thành công");
                dispatch(getTeacher());
            })
            .catch(error => toastr.error(error.message));
    };
};

export default {
    getClass,
    insertClass,
    deleteClass,
    updateClass,
    openModal,
    closeModal,
    changeValue,
    openModalDelete,
    closeModalDelete,
    getStudent,
    insertStudent,
    updateStudent,
    deleteStudent,
    getTeacher,
    insertTeacher,
    updateTeacher,
    deleteTeacher
};