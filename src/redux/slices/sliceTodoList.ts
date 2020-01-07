import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultState } from "../store/defaultState";
import uuid from "uuid";

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: defaultState.todoList,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const label = action.payload;
            const newTodo = { label, uuid: uuid(), checked: false };
            return { ...state, todos: [ ...state.todos, newTodo ]};
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const uuid = action.payload;
            const toDeleteIdx = state.todos.findIndex(t => t.uuid === uuid);
            const todos = [ ...state.todos ];
            if (toDeleteIdx !== -1) {
                todos.splice(toDeleteIdx, 1);
            }
            return { ...state, todos };
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const uuid = action.payload;
            const todos = state.todos.map(t => t.uuid === uuid ? { ...t, checked: !t.checked } : t);
            return { ...state, todos };
        },
        changeListTitle: (state, action: PayloadAction<string>) => {
            const title = action.payload;
            return { ...state, title };
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo, changeListTitle } = todoListSlice.actions;