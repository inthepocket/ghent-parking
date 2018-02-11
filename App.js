import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import { middleware } from './src/utils/redux';
import { startFirebase, stopFirebase } from './src/utils/firebase';
import AppWithNavigationState from './src/navigators/AppNavigator';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);
export default class App extends React.Component {
  componentWillMount() {
    startFirebase(store);
  }
  componentWillUnmount() {
    stopFirebase();
  }
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
