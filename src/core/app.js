import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configurePersistedStore from './app.store'
import 'react-native-gesture-handler';

import RootContainer from '../navigation/index'


const { store, persistor } = configurePersistedStore()
const app = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer/>
      </PersistGate>
    </Provider>
  );
}

export default app;