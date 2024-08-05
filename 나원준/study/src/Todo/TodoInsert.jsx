import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    return(
        <from className='TodoInsert'>
            <input placeholder='할일을 입력해주세요'/>
            <button type='submit'><MdAdd/></button>
        </from>
    )
}

export default TodoInsert;