import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import menu from './menu/reducer';
import category from './category/reducer';
import configure from './configure/reducer';
import attendance from './attendance/reducer';
import system from './system/reducer';

export default combineReducers({
    toastr: toastrReducer,
    menu,
    category,
    configure,
    attendance,
    system
});