import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { TodoListContainer } from './containers/TodoListContainer';
import { store } from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <TodoListContainer />
    </Provider>
  );
}

export default App;
