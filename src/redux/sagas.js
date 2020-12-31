import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {SET_SMURF_NAME, TEST_PUT_FUNCTION, FETCH_SMURF_DATA} from './constants';
import {testPutFunction, saveSmurfData} from './actions'

function* fetchSmurfs(){
   yield put(testPutFunction());
}

function* testPutFunctionCalling(){
    alert('I am a test put function');
}

function* sagas(){
    yield takeLatest(SET_SMURF_NAME, fetchSmurfs);
    yield takeLatest(TEST_PUT_FUNCTION, testPutFunctionCalling);
    // yield takeLatest(FETCH_SMURF_DATA, onFetchSmurfData);
}

export default sagas;