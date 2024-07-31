import {useState, useMemo, useCallback} from 'react';

const getAverage =(numbers)=>{
    console.log('평균값계산')
    if(numbers.length===0) return 0;
    const sum =numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
}

const Callback=()=>{
    const [list,setList] = useState([]);
    const [number, setNumber] = useState('');
    const onlyNumber = /^[0-9]*$/;

    const onChange=useCallback(e=>{
        console.log('숫자작성중')
        setNumber(e.target.value);
    },[])//컴포넌트가 처음 렌더링 될때만 함수 생성

    const onInsert=useCallback(()=>{
        if(onlyNumber.test(number)&&number!==''){
            console.log('배열추가')
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
        }
    },[number, list])//number,list가 업데이트 되었을때만 함수 생성

    const avg= useMemo(()=>getAverage(list),[list]);
    
    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index)=>(<li key={index}>{value}</li>))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    )
}

export default Callback;