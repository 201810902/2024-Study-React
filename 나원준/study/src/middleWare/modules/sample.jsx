import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createThunk from '../lib/createThunk';
import {takeLatest} from 'redux-saga/effects';
import createSaga from '../lib/createSaga';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createSaga(GET_POST, api.getPost);
const getUsersSaga = createSaga(GET_USERS, api.getUsers);

export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

//saga사용전(위와 동일)
// export const getPost = createThunk(GET_POST, api.getPost);
// export const getUsers = createThunk(GET_USERS, api.getUsers);

//(createThunk사용전)위와 동일
// export const getPost =id=> async dispatch=>{
//     dispatch({type: GET_POST});
//     try{
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response?.data || {}
//         });
//         console.log('post리스폰: '+response);
//     } catch(e){
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         });
//         throw e; //에러조회
//     }
// }

// export const getUsers =()=> async dispatch=>{
//     dispatch({type: GET_USERS});
//     try{
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response?.data || []
//         });
//         console.log('user리스폰: '+response);
//     } catch(e){
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         });
//         throw e;
//     }
// }

const initialState = {
    post: {},
    users: []
};

const sample = handleActions(
    {
        // [GET_POST]: (state)=>({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_POST: true //요청시작
        //     }
        // }),
        [GET_POST_SUCCESS]: (state, action)=>({
            ...state,
            // loading: {
            //     ...state.loading,
            //     GET_POST: false //요청완료
            // },
            post: action.payload
        }),
        // [GET_POST_FAILURE]: (state, action)=>({
        //     ...state,
        //     loading: {
        //             ...state.loading,
        //             GET_POST: false //요청완료
        //         }
        // }),
        // [GET_USERS]: (state)=>({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_USERS: true //요청시작
        //     }
        // }),
        [GET_USERS_SUCCESS]: (state, action) =>({
            ...state,
            // loading: {
            //     ...state.loading,
            //     GET_USERS: false //요청 완료
            // },
            users: action.payload
        }),
        // [GET_USERS_FAILURE]: (state, action)=>({
        //     ...state,
        //     loading: {
        //         ...state.loading,
        //         GET_USERS: false //요청 완료
        //     },
        // })
    },
    initialState
)

export default sample;