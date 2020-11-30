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

////////////////////CLASS/////////////////////////////////
const getClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getClass(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const insertClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertClass(params)
            .then(result => {
                toastr.success("Thêm lớp thành công");
                dispatch(getClass());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const updateClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateClass(params)
            .then(result => {
                toastr.success("Sửa lớp thành công");
                dispatch(getClass());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const deleteClass = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteClass(params)
            .then(result => {
                toastr.success("Xóa lớp thành công");
                dispatch(getClass());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

//////////////////STUDENT////////////////////////////////

const getStudent = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getStudent(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const insertStudent = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertStudent(params)
            .then(result => {
                toastr.success("Thêm sinh viên thành công");
                dispatch(getStudent());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const updateStudent = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateStudent(params)
            .then(result => {
                toastr.success("Sửa sinh viên thành công");
                dispatch(getStudent());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

const deleteStudent = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteStudent(params)
            .then(result => {
                toastr.success("Xóa sinh viên thành công");
                dispatch(getStudent());
            })
            .catch(error => { dispatch({ type: type.GET_DATA_ERROR }); toastr.error(error.message) });
    };
};

/////////////////////TEACHER/////////////////////////////////

const getTeacher = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getTeacher(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};

const insertTeacher = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
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
        dispatch({ type: type.WAITTING_LOAD_DATA });
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
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteTeacher(params)
            .then(result => {
                toastr.success("Xóa giảng viên thành công");
                dispatch(getTeacher());
            })
            .catch(error => toastr.error(error.message));
    };
};

//////////////////////SUBJECT//////////////////////////////
const getSubject = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getSubject(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};

const insertSubject = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertSubject(params)
            .then(result => {
                toastr.success("Thêm môn học thành công");
                dispatch(getSubject());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateSubject = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateSubject(params)
            .then(result => {
                toastr.success("Sửa môn học thành công");
                dispatch(getSubject());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteSubject = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteSubject(params)
            .then(result => {
                toastr.success("Xóa môn học thành công");
                dispatch(getSubject());
            })
            .catch(error => toastr.error(error.message));
    };
};

//////////////////////YEAR///////////////////////////////////
const getYear = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getYear(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};

const insertYear = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertYear(params)
            .then(result => {
                toastr.success("Thêm năm học thành công");
                dispatch(getYear());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateYear = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateYear(params)
            .then(result => {
                toastr.success("Sửa năm học thành công");
                dispatch(getYear());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteYear = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteYear(params)
            .then(result => {
                toastr.success("Xóa năm học thành công");
                dispatch(getYear());
            })
            .catch(error => toastr.error(error.message));
    };
};

/////////////////SEMESTER/////////////////////////////////
const getSemester = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.getSemester(params)
            .then(result => dispatch({ type: type.GET_DATA_SUCCESS, data: result }))
            .catch(error => toastr.error(error.message));
    };
};


const insertSemester = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.insertSemester(params)
            .then(result => {
                toastr.success("Thêm học kỳ thành công");
                dispatch(getSemester());
            })
            .catch(error => toastr.error(error.message));
    };
};

const updateSemester = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.updateSemester(params)
            .then(result => {
                toastr.success("Sửa học kỳ thành công");
                dispatch(getSemester());
            })
            .catch(error => toastr.error(error.message));
    };
};

const deleteSemester = (params) => {
    return function (dispatch) {
        dispatch({ type: type.WAITTING_LOAD_DATA });
        return api.deleteSemester(params)
            .then(result => {
                toastr.success("Xóa học kỳ thành công");
                dispatch(getSemester());
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
    getClass,
    insertClass,
    deleteClass,
    updateClass,
    getStudent,
    insertStudent,
    updateStudent,
    deleteStudent,
    getTeacher,
    insertTeacher,
    updateTeacher,
    deleteTeacher,
    getSubject,
    insertSubject,
    updateSubject,
    deleteSubject,
    getYear,
    insertYear,
    updateYear,
    deleteYear,
    getSemester,
    insertSemester,
    updateSemester,
    deleteSemester
};