import {useState} from 'react';
import axios from 'axios';


const AxiosEx =()=>{
    const [data, setData] = useState(null);
    
    //Promise 사용
    // const onClick =()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=>{
    //         setData(response.data);
    //     });
    // };

    //async/await 사용
    const onClick=async()=>{
        try{
            const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&apiKey=167cc191f4764a218e9a149070efb532'
            );
            setData(response.data);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div>
            <div>
                <button onClick={onClick} >불러오기</button>
                {data&&<textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />} 
            </div>
        </div>
    )
}

export default AxiosEx;