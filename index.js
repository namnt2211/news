import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import MyReducer from './reducers/index'
import rootSaga from './sagas/rootSaga'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    MyReducer,
    applyMiddleware(sagaMiddleware)
)
export default class Project extends Component {
    render() {
      return  <Provider store = {store} >
      <App/>
  </Provider>;
    }
  }


sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent('vnexpress', () => Project);
