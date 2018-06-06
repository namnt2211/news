import {call, all} from 'redux-saga/effects'
import {watchFetchNews} from './NewsSaga'

export default function* rootSaga(){
    yield call(watchFetchNews)
} ;