import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';


const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC, ()=>undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, ()=>undefined);

function* increaseSaga(){
    yield delay(1000);//1초 대기
    yield put(increase());//특정 액션 디스패치
}
function* decreaseSaga(){
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC, increaseSaga);//들어오는 모든 액션에 작업 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);//기존에 진행중이던 작업을 취소하고 마지막거만 처리
}
//위의 코드(increaseSaga,decreaseSaga)와 동일
// export const increaseAsync =()=> dispatch =>{
//     setTimeout(()=>{
//         dispatch(increase());
//     },1000)
// }

// export const decreaseAsync =()=> dispatch =>{
//     setTimeout(()=>{
//         dispatch(decrease())
//     },1000)
// }

const initialState = 0;

const counter = handleActions({
    [INCREASE]: state=> state+1,
    [DECREASE]: state=> state-1
}, initialState)

export default counter;