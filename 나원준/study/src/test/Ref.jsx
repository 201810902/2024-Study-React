import {useRef} from 'react';

const Ref=()=>{
    const id = useRef(1);
    const setId =(n)=>{
        id.current = n;
    }
    const printId=()=>{
        console.log(id.current);
    }
    return (
        <div>
            <button onClick={()=> setId(2)}>id 2로 변경</button>
            <button onClick={printId}>id콘솔에 출력</button>
        </div>
    )
}
export default Ref;