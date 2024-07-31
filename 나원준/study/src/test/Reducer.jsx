import {useReducer} from 'react';

function reducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value+1};
        case 'DECREMENT':
            return {value: state.value-1};
        default: return state;
    }
}

const Reducer=()=>{
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <p>
                현재 값은 <b>{state.value}</b>
                <button onClick={()=>dispatch({type:'INCREMENT'})}>+1</button>
                <button onClick={()=>dispatch({type:'DECREMENT'})}>-1</button>
            </p>
        </div>
    )

}
export default Reducer;