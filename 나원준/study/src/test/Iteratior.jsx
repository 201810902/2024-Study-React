import {useState} from 'react';

const Iteratior=()=>{
    const [names, setNames] = useState([
        {id : 1, text: '일'},
        {id : 2, text: '이'},
        {id : 3, text: '삼'},
        {id : 4, text: '사'},
        {id : 5, text: '오'}
    ]);

    const [inputText, setInputText] = useState('');
    const [removeText, setRemoveText] = useState('');
    const [nextId, setNextId] = useState(6);

    const onChange =(e)=> setInputText(e.target.value);
    const removeChange=(e)=> setRemoveText(e.target.value);
    const onClick=()=>{
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    };
    const onKeyPress=(e)=>{
        if(e.key==='Enter'){
            onClick();
        }
    };
    const removeKeyPress=(e)=>{
        if(e.key==='Enter'){
            onRemove();
        }
    };
    const onRemove=()=>{    
            const nextNames = names.filter(name => name.text!==removeText);
            setNames(nextNames);
            setRemoveText('');
        
    };
    const namesList =names.map(name=><li key={name.id}>{name.text}</li>)
    return (
        <>
            <input value={inputText} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
            <input value={removeText} onChange={removeChange} onKeyPress={removeKeyPress}/>
            <button onClick={onRemove}>삭제</button>
        </>
    );
};
export default Iteratior;