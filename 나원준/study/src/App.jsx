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
// import TodoTemplate from './Todo/TodoTemplate.jsx';
// import TodoInsert from './Todo/TodoInsert';
// import TodoList from './Todo/TodoList';
import {useState, useRef, useCallback} from 'react';
import Immer from './test/Immer';

//일정관리 및 최적화 실습
// function createTodos(){
//   const array = [];
//   for(let i=1;i<=2500;i++){
//     array.push({id: i, text: `할 일 ${i}`, checked: false});
//   }
//   return array;
// }
//일정관리 및 최적화 실습
// function todoReducer(todos, action){
//   switch (action.type){
//     case 'INSERT': return todos.concat(action.todo);
//     case 'REMOVE' : return todos.filter(todo=> todo.id !==action.id);
//     case 'TOGGLE' : return todos.map(todo=> todo.id ===action.id ? {...todo, checked: !todo.checked} : todo);
//     default : return todos;
//   }
// }

function App() {
return <Immer />
  //immer 연습
 


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

  //일정관리 앱 만들기 및 최적화 실습
//   const [todos, dispatch] = useReducer(todoReducer, undefined, createTodos);

//   const nextId = useRef(2501);
  
//   const onInsert = useCallback(text=>{
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false,
//     };
//     dispatch({type: 'INSERT', todo})
//     nextId.current+=1;
//   },[])

//   const onRemove = useCallback((id)=>{
//     dispatch({type: 'REMOVE', id})
//   },[])

//   const onToggle = useCallback(id=>{
//     dispatch({type: 'TOGGLE', id})
//   },[])

//   return (
//           <TodoTemplate>
//            <TodoInsert onInsert={onInsert}/>
//            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
//          </TodoTemplate>
//          )

}

export default App;
