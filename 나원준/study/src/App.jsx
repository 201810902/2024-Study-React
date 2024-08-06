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
import {useState, useRef, useCallback} from 'react';
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
  const [todos, setTodos] =useState([
]);

  const nextId = useRef(1);
  
  const onInsert = useCallback(text=>{
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current+=1;
  },[todos])

  const onRemove = useCallback((id)=>{
    setTodos(todos.filter(todo=>todo.id !==id))
  },[todos])

  const onToggle = useCallback(id=>{
    setTodos(todos.map(todo=>todo.id===id?{...todo, checked: !todo.checked} : todo))
  },[todos])

  return (
          <TodoTemplate>
           <TodoInsert onInsert={onInsert}/>
           <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
         </TodoTemplate>
         )

}

export default App
