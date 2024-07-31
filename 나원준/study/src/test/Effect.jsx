import {useState, useEffect} from 'react';

const Effect =()=>{
    const [name, setName] = useState('');
    const [nick, setNcik] = useState('');
    /*렌더링시(마운트,업데이트) 마다 로그 호출
    useEffect(()=>{
        console.log('렌더링 완료');
        console.log({
            name, nick
        });
    });
    */

   /*마운트 될때만 호출
   
   useEffect(()=>{
    console.log('렌더링 완료');
    console.log({
        name, nick
    })
},[]);
*/ 
/*특정값 업데이트시에만 호출
useEffect(()=>{
    console.log(name);    
},[name]);
*/
    /*언마운트 되기전, 업데이트 되기 직전에 호출
    useEffect(()=>{
        console.log('effect');
        console.log(name);
        return()=>{
            console.log('cleanup');
            console.log(name)
        }
    },[name]);
*/
    //언마운트 되기전 호출
    useEffect(()=>{
       return ()=>{
        console.log('unmount')
       } 
    },[]);

const onChangeName =(e)=>{
        setName(e.target.value);

    }

    const onChangeNick=(e)=>{
        setNcik(e.target.value);
    }

    return (
        <div>
            <div>
                <input value = {name} onChange = {onChangeName}/>
                <input value={nick} onChange={onChangeNick}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                <b>닉네임:</b>{nick}
                </div>    
            </div>
        </div>
    );
};
export default Effect;