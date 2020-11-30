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
    optionRole: [],
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
                paging: action.data.paging,
                columnSort: null, 
                direction: null
            };
        case type.GET_DATA_ERROR:
            return {
                ...state,
                loading: false
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
