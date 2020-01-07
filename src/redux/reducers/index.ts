import { combineReducers } from 'redux';
import { todoListSlice } from '../slices/sliceTodoList';

export const rootReducer = combineReducers({
    todoList: todoListSlice.reducer,
});