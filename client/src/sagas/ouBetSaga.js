import 'babel-polyfill';
import { socketEmit } from '../utils/socketIoHelper';
//import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { takeEvery } from "redux-saga/effects";

function* getCoinNames() {
    yield socketEmit('coinNames', {});
}

function* ouSaga() {
    return yield [
        takeEvery("GET_COINNAMES", getCoinNames)

    ];

}

export default ouSaga;