
import {put, takeLatest} from 'redux-saga/effects';
import API from './Api'
import { FETCH_FAILED, FETCH_NEWS, FETCH_SUCCESS } from '../constants/constants';

function* fetchNews(){
    try{
        const receiveNews = yield API.getNewsfromAPI();
        yield put({
            type: FETCH_SUCCESS,
            receiveNews
        })
    } catch(error){
        yield put({
            type: FETCH_FAILED,
            error
        })
    }
}

export function* watchFetchNews(){
    yield takeLatest(FETCH_NEWS, fetchNews)
}