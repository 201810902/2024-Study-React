// import { useLocation } from "react-router-dom";
import {useSearchParams} from 'react-router-dom';

const About =()=>{
    // const location = useLocation();
    const [searchParamas, setSearchParams] = useSearchParams();
    const detail = searchParamas.get('detail');
    const mode = searchParamas.get('mode');


    const onToggleDetail =()=>{
        setSearchParams({mode,detail: detail=== 'true'? false : true});
    }
    const onIncreaseMode=()=>{
        const nextMode = mode === null?1:parseInt(mode)+1;
        setSearchParams({mode: nextMode, detail});
    }

    return (
        <div>
            <h1>소개</h1>
            <p>라우터 사용중</p>
            {/* <p>쿼리스트링: {location.search}</p> */}
            <p>detail: {detail}</p>
            <p>mode :{mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode +1</button>
        </div>
    )
}
export default About;