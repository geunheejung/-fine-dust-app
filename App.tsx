import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Scene } from 'react-native-router-flux';
import { RouteKey } from './constatns';
import MainScene from './screens/Main';
import FindDustScene from './screens/FindDust';
import dataReducer from './reducers/data';
import dataSaga from './sagas/data';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  dataReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(dataSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Scene 
              init
              initial
              hideNavBar 
              key={RouteKey.MAIN}
              component={MainScene} 
              title="Main" 
            />          
            <Scene 
              back
              key={RouteKey.FIND_DUST} 
              component={FindDustScene} 
              title="FindDust" 
            />
          </>
        </Router>
      </Provider>
    );
  }
}