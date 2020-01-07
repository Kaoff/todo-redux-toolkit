import { Action } from 'redux';

/** LIST__CHANGE_TITLE */
export const LIST__CHANGE_TITLE = 'LIST__CHANGE_TITLE';
export interface ListChangeTitleAction extends Action<typeof LIST__CHANGE_TITLE> {
    payload: {
        title: string;
    }
}

export const changeListTitle = (title: string): ListChangeTitleAction => {
    return {
        type: LIST__CHANGE_TITLE,
        payload: {
            title,
        }
    }
}