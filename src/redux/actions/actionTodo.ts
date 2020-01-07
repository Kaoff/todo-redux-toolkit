import { createAction } from '@reduxjs/toolkit';


/** TODO__ADD */
// export const TODO__ADD = 'TODO__ADD';
// export interface TodoAddAction extends Action<typeof TODO__ADD> {
//     payload: {
//         label: string;
//     }
// }

// export const addTodo = (label: string): TodoAddAction => {
//     return {
//         type: TODO__ADD,
//         payload: {
//             label,
//         }
//     }
// }


/** TODO__DELETE */
// export const TODO__DELETE = 'TODO__DELETE';
// export interface TodoDeleteAction extends Action<typeof TODO__DELETE> {
//     payload: {
//         uuid: string;
//     }
// }

// export const deleteTodo = (uuid: string): TodoDeleteAction => {
//     return {
//         type: TODO__DELETE,
//         payload: {
//             uuid,
//         }
//     }
// }


// /** TODO__TOGGLE */
// export const TODO__TOGGLE = 'TODO__TOGGLE';
// export interface TodoToggleAction extends Action<typeof TODO__TOGGLE> {
//     payload: {
//         uuid: string;
//     }
// }

// export const toggleTodo = (uuid: string): TodoToggleAction => {
//     return {
//         type: TODO__TOGGLE,
//         payload: {
//             uuid,
//         }
//     }
// }

export const addTodo = createAction<string, 'TODO__ADD'>('TODO__ADD');
export const deleteTodo = createAction<string, 'TODO__DELETE'>('TODO__DELETE');
export const toggleTodo = createAction<string, 'TODO__TOGGLE'>('TODO__TOGGLE');
