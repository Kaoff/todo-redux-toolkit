import uuid from "uuid";

export interface Todo {
    uuid: string;
    label: string;
    checked: boolean;
}

export interface TodoList {
    title: string;
    todos: Todo[];
}

export interface State {
    todoList: TodoList;
}

export const defaultState = {
    todoList: {
        title: 'My First List',
        todos: [
            {
                uuid: uuid(),
                label: 'My First Todo',
                checked: false,
            },
        ]
    }
}