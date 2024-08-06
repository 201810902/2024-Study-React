import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import {useState, useCallback} from 'react';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    
    const Change = useCallback(e=>{
        setValue(e.target.value);
    },[])

    const Submit = useCallback(e=>{
        onInsert(value);
        setValue(e.target.value);
        e.preventDefault();
        setValue('');
    },[onInsert, value]);

    return(
        <form className='TodoInsert' onSubmit = {Submit}>
            <input placeholder='할일을 입력해주세요' value={value} onChange={Change} />
            <button type='submit'><MdAdd/></button>
        </form>
    )
}

export default TodoInsert;