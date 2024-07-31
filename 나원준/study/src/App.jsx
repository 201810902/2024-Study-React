import './App.css'
import Iteratior from './test/Iterater.jsx';
import State from './test/State.jsx';
import Effect from './test/Effect.jsx';
import Reducer from './test/Reducer.jsx';
import ReducerInfo from './test/ReducerInfo.jsx';
import Memo from './test/Memo.jsx';
import Callback from './test/Callback.jsx';
import Ref from './test/Ref.jsx';
import CustomSample from './test/CustomSample.jsx';
import {useState} from 'react';


function App() {
  const [visible,setVisible] =useState(false);

  return (
    <>
      <button onClick={()=>{setVisible(!visible)}}>{visible?'숨기기':'보이기'}</button>
      {visible&&<State />}
      {visible&&<Effect />}
      {visible&&<Reducer />}
      {visible&&<ReducerInfo />}
      {visible&&<Memo />}
      {visible&&<Callback />}
      {visible&&<Ref />}
      <CustomSample />
    </>
  );
}

export default App
