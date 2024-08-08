import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import About from './Router/About';
import Home from './Router/Home';
import Profile from './Router/Profile';
import Article from './Router/Article';
import Articles from './Router/Articles';
import Layout from './Router/Layout';
import NotFound from './Router/NotFound';


const App2=()=>{
    return (
        <BrowserRouter >
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element ={<About />} />
                    <Route path="/profiles/:username" element={<Profile />}/>
                    <Route path="/articles" element={<Articles />}>
                        <Route path="articles/:id" element={<Article />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
)}

export default App2;