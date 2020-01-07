import { rootReducer } from '../reducers';
import { configureStore } from '@reduxjs/toolkit';

// export const store = createStore(
//     rootReducer,
//     defaultState,
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );

export const store = configureStore({
    reducer: rootReducer,
})