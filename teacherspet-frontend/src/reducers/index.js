import { combineReducers } from  'redux';
import  cards  from  './cardReducer';
import students from './studentReducer';

export  default  combineReducers({
    cards,
    students
})