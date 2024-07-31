import CustomHook from './CustomHook.jsx';

const CustomSample =()=>{
    const [state, onChange] = CustomHook({name: '', nick: ''});
    const {name, nick} =state;

    return (
        <div>
            <div>
            <input name='name' value={name} onChange={onChange}/>
            <input name='nick' value={nick} onChange={onChange}/>
            </div>
            <div>
                <div>
                    이름: {name}
                </div>
                <div>
                    닉네임: {nick}
                </div>
            </div>
        </div>
    )
}
export default CustomSample;