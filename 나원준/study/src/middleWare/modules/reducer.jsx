import { combineReducers } from "redux";
import {all} from 'redux-saga/effects';
import counter,{counterSaga} from "./counter";
import sample, {sampleSaga} from "./sample";
import loading from "./loading";


const rootReducer = combineReducers({
    counter, sample, loading
})

export function* rootSaga(){
    yield all([counterSaga(),sampleSaga()]);//여러 사가를 합쳐준다
}

export default rootReducer;