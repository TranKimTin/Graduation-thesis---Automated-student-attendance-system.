import type from "./types";
import _ from 'lodash';

const initialState = {
    loading: true,
    list: [],
    paging: {
        pageSize: 25,
        pageIndex: 1,
        totalPage: 1,
    },
    open: false,
    dataInsert: {},
    open_modal_delete: false,
    optionSubject: [],
    optionYear: [],
    optionSemester: [],
    optionSectionClass: [],
    optionStudent: [],
    optionTeacher: [],
    columnSort: null,
    direction: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.WAITTING_LOAD_DATA:
            return {
                ...state,
                loading: true,
            };
        case type.GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.data.data,
                ...action.data.options,
                paging: action.data.paging
            };
        case type.OPEN_MODAL:
            return {
                ...state,
                open: true,
                dataInsert: action.data || [],
            };
        case type.CLOSE_MODAL:
            return {
                ...state,
                open: false,
            };
        case type.CHANGE_VALUE:
            return {
                ...state,
                dataInsert: {
                    ...state.dataInsert,
                    [action.data.name]: action.data.value,
                },
            };
        case type.OPEN_MODAL_DELETE:
            return {
                ...state,
                open_modal_delete: true
            };
        case type.CLOSE_MODAL_DELETE:
            return {
                ...state,
                open_modal_delete: false
            };
        case type.CHANGE_SORT:
            if (state.columnSort === action.columnSort) {
                return {
                    ...state,
                    list: [...state.list.reverse()],
                    direction:
                        state.direction === 'ascending' ? 'descending' : 'ascending',
                };
            }

            return {
                ...state,
                columnSort: action.columnSort,
                list: _.sortBy(state.list, [action.columnSort]),
                direction: 'ascending',
            };
        default:
            return state;
    }
};

export default reducer;
