import { TodoAddAction, TodoDeleteAction, TodoToggleAction, TODO__ADD, TODO__DELETE, TODO__TOGGLE } from "../actions/actionTodo"
import { defaultState } from "../store/defaultState";
import uuid from "uuid";
import { ListChangeTitleAction, LIST__CHANGE_TITLE } from "../actions/actionList";

type TodoAction =
    | TodoAddAction
    | TodoDeleteAction
    | TodoToggleAction;

type ListAction =
    | ListChangeTitleAction;

type Action =
    | TodoAction
    | ListChangeTitleAction

export const todoList = (state = defaultState.todoList, action: Action) => {
    switch (action.type) {
        case TODO__ADD: {
            const { payload: { label } } = action;
            const newTodo = { label, uuid: uuid(), checked: false };
            return { ...state, todos: [ ...state.todos, newTodo ] };
        }
        case TODO__DELETE: {
            const { payload: { uuid } } = action;
            const toDeleteIdx = state.todos.findIndex(t => t.uuid === uuid);
            const todos = [ ...state.todos ];
            if (toDeleteIdx !== -1) {
                todos.splice(toDeleteIdx, 1)
            }
            return { ...state, todos };
        }
        case TODO__TOGGLE: {
            const { payload: { uuid } } = action;
            const todos = state.todos.map(t  => t.uuid === uuid ? { ...t, checked: !t.checked } : t);
            return { ...state, todos };
        }
        case LIST__CHANGE_TITLE: {
            const { payload: { title } } = action;
            return { ...state, title };
        }
        default: {
            return { ...state };
        }
    }
}