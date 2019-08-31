import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Loading from './src/sections/components/Loading';
import AppContainer from './src/AppContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
