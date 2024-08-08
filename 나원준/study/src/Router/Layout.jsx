import { Outlet, useNavigate } from "react-router-dom";

const Layout =()=>{

    const navigate = useNavigate();

    //이전 페이지로 이동
    const Back =()=>{
        navigate(-1);
    };
    
    //지정 경로로 이동
    const goArticles =()=>{
        navigate('/articles');
    }


    return (
        <div>
            <header style={{background: 'lightgray', fontSize: 24}}>
                <button onClick={Back}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;