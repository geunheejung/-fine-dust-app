import {AppRegistry} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import {name as appName} from './app.json';
import dataReducer from './reducers/data';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  dataReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => (
    <Provider store={store}>
      <App />
    </Provider>  
  )
);