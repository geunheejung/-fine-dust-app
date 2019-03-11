import { call } from 'redux-saga/effects';
import dataSaga from './data';

const sagas = [
  ...dataSaga,
];

export default function* () {
  yield sagas.map(saga => call(saga));
}