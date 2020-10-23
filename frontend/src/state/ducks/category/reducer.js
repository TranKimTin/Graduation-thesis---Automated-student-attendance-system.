import type from './types';

const initialState = {
    loading: true,
    listClass: [],
    paging: {
        pageSize: 25,
        pageIndex: 1,
        totalPage: 1
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.WAITTING_LOAD_DATA:
            return {
                ...state,
                loading: true
            };
        case type.GET_CLASS_SUCCESS:
            return {
                ...state,
                loading: false,
                listClass: action.data,
                paging: action.paging
            };
        default:
            return state;
    }
};

export default reducer;