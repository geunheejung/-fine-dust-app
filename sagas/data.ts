import { take, fork, put, call } from 'redux-saga/effects';
import * as fromDataAction from '../reducers/data';
import * as api from '../service/api';

function* workFetchFineDust(action: object) {
  try {
    const response = yield call(api.getFineDust);
    yield put(fromDataAction.fetchFineDustSuccess(response));
  } catch(error) {
    console.error('error ->', error);
  }
}

/******** watch Saga ********/

function* watchFetchFineDust() {
  while (true) {
    try {
      const action = yield take(fromDataAction.ACTION_TYPE.FETCH_FINE_DUST_REQUEST);
      yield fork(workFetchFineDust, action);
    } catch(error) {
      console.error('watchFetchFineDust -->', error);
    }
  }
}

export default watchFetchFineDust;