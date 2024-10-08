import { startLoading, finishLoading } from "../modules/loading";


export default function createThunk(type, request){
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch=>{
        dispatch({type});
        dispatch(startLoading(type));
        try{
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            });
            dispatch(finishLoading(type));
        } catch(e){
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            });
            dispatch(finishLoading(type));
            throw e;
        }
        console.log('id는 뭐니'+params);
    };
}