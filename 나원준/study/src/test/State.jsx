
import {useState} from 'react';

const State =()=>{
	const [form, setForm] = useState({
		username: '',
		message: ''
		});
	const {username, message} = form;
	
	const onChangeEvent=(e)=>{
		const nextForm={
			...form,
			[e.target.name]:e.target.value
		};
		setForm(nextForm);
	};
	/*위의 코드를 이렇게 작성해도 상관없음
		const onChange=(e)=>{
		const {name,value}=e.target;
		setForm({
			...form,
			[name] : value	
		)};
	};
	*/ 
	const onClickEvent =()=>{
		alert(username+':'+message);
		setForm({
			username: '',
			message: ''
		})
	};
	
	const onKeyPressEvent=(e)=>{
		if(e.key==='Enter'){
			onClickEvent();
		}
	};
	
	return (
	<div>
		<h1>이벤트연습</h1>
		<input type="text" name="username" placeholder="사용자명" value={username} onChange={onChangeEvent}/>
		<input type="text" name="message" placeholder="자유입력" value={message} onChange={onChangeEvent} onKeyPress={onKeyPressEvent}/>
		<button onClick={onClickEvent}>확인</button>
	</div>
	)
};
export default State;

