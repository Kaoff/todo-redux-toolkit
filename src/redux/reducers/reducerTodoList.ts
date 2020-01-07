import { addTodo, deleteTodo, toggleTodo } from "../actions/actionTodo"
import { defaultState } from "../store/defaultState";
import uuid from "uuid";
import { changeListTitle } from "../actions/actionList";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";

// type TodoAction =
//     | TodoAddAction
//     | TodoDeleteAction
//     | TodoToggleAction;

// type ListAction =
//     | ListChangeTitleAction;

// type Action =
//     | TodoAction
//     | ListAction

// export const todoList = (state = defaultState.todoList, action: Action) => {
//     switch (action.type) {
//         case TODO__ADD: {
//             const { payload: { label } } = action;
//             const newTodo = { label, uuid: uuid(), checked: false };
//             return { ...state, todos: [ ...state.todos, newTodo ] };
//         }
//         case TODO__DELETE: {
//             const { payload: { uuid } } = action;
//             const toDeleteIdx = state.todos.findIndex(t => t.uuid === uuid);
//             const todos = [ ...state.todos ];
//             if (toDeleteIdx !== -1) {
//                 todos.splice(toDeleteIdx, 1)
//             }
//             return { ...state, todos };
//         }
//         case TODO__TOGGLE: {
//             const { payload: { uuid } } = action;
//             const todos = state.todos.map(t  => t.uuid === uuid ? { ...t, checked: !t.checked } : t);
//             return { ...state, todos };
//         }
//         case LIST__CHANGE_TITLE: {
//             const { payload: { title } } = action;
//             return { ...state, title };
//         }
//         default: {
//             return { ...state };
//         }
//     }
// }

export const todoList = createReducer(defaultState.todoList, {
    [addTodo.type]: (state, action: PayloadAction<string>) => {
        const label = action.payload;
        const newTodo = { label, uuid: uuid(), checked: false };
        return { ...state, todos: [ ...state.todos, newTodo ]};
    },
    [deleteTodo.type]: (state, action: PayloadAction<string>) => {
        const uuid = action.payload;
        const toDeleteIdx = state.todos.findIndex(t => t.uuid === uuid);
        const todos = [ ...state.todos ];
        if (toDeleteIdx !== -1) {
            todos.splice(toDeleteIdx, 1);
        }
        return { ...state, todos };
    },
    [toggleTodo.type]: (state, action: PayloadAction<string>) => {
        const uuid = action.payload;
        const todos = state.todos.map(t => t.uuid === uuid ? { ...t, checked: !t.checked } : t);
        return { ...state, todos };
    },
    [changeListTitle.type]: (state, action: PayloadAction<string>) => {
        const title = action.payload;
        return { ...state, title };
    },
});