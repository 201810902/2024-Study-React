import './App.css'
// import Iteratior from './test/Iterater.jsx';
// import State from './test/State.jsx';
// import Effect from './test/Effect.jsx';
// import Reducer from './test/Reducer.jsx';
// import ReducerInfo from './test/ReducerInfo.jsx';
// import Memo from './test/Memo.jsx';
// import Callback from './test/Callback.jsx';
// import Ref from './test/Ref.jsx';
// import CustomSample from './test/CustomSample.jsx';
import {useState} from 'react';
import TodoTemplate from './Todo/TodoTemplate.jsx';
import TodoInsert from './Todo/TodoInsert';
import TodoList from './Todo/TodoList';

function App() {
  // Hooks 연습
  // const [visible,setVisible] =useState(false);

  // return (
  //   <>
  //     <button onClick={()=>{setVisible(!visible)}}>{visible?'숨기기':'보이기'}</button>
  //     {visible&&<State />}
  //     {visible&&<Effect />}
  //     {visible&&<Reducer />}
  //     {visible&&<ReducerInfo />}
  //     {visible&&<Memo />}
  //     {visible&&<Callback />}
  //     {visible&&<Ref />}
  //     <CustomSample />
  //   </>
  // );
  const [todos, setTodos] =useState([{
    id:1,
    text:'리액트 연습하기',
    checked: true,
  },
  {
    id: 2,
    text: '운동하기',
    checked: true,
  },
  {
    id: 3,
    text: '코테 문제 풀기',
    checked: false,
  },
]);
  return <TodoTemplate>
           <TodoInsert/>
           <TodoList/>
         </TodoTemplate>

}

export default App
