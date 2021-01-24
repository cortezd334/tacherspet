import { combineReducers } from  'redux';
import  cards  from  './cardReducer';
import students from './studentReducer';
import lessons from './lessonReducer';

export  default  combineReducers({
    cards,
    students,
    lessons
})