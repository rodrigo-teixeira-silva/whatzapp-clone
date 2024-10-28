import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import reducers from './src/reducers';
import Routes from './src/navigation/Routes';


const store = configureStore({
  reducer: reducers,
});

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
