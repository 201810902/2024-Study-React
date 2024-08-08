import {BrowserRouter,Route, Routes} from 'react-router-dom';
import NewsPage from './API/NewsPage';


const App3 =()=>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/:category" element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
)}

export default App3;