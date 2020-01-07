import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { defaultState } from './defaultState';

export const store = createStore(
    rootReducer,
    defaultState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);