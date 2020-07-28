/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Routes from './src/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474f',
  },
});

export default App;
