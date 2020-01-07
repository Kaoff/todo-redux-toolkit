import { todoList } from './reducerTodoList';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    todoList,
})