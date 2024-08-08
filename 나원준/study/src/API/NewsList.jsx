import {useState, useEffect} from 'react';
import NewsItem from './NewsItem.jsx';
import axios from 'axios';
import CustomPromise from './CustomPromise.jsx';

//커스텀 활용법
const NewsList=({category})=>{
    const [loading,response,error] = CustomPromise(()=>{
        const query= category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=167cc191f4764a218e9a149070efb532`);
    },[category])
    if(loading){
        return <div className='NewsListBlock'>대기중...</div>
    }
    if(!response){
        return null;
    }
    if(error){
        return <div className='NewsListBlock'>에러발생</div>
    }
    const {articles} = response.data;

    return (
        <div className='NewsListBlock'>
            {articles.map(article=>(<NewsItem key={article.url} article={article} />))}
        </div>
    )
}



//일반적인 사용법
// const NewsList =({category})=>{
//     const [articles, setArticles] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(()=>{
//         const fetchData=async()=>{
//             setLoading(true);
//             try{
//                 const query = category === 'all' ? '' : `&category=${category}`;
//                 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=167cc191f4764a218e9a149070efb532`);
//                 setArticles(response.data.articles);
//             }
//             catch(e){
//                 console.log(e);
//             }
//             setLoading(false);
//         }
//         fetchData();
//     },[category])
//     if(loading){
//         return<div className='NewsListBlock'>대기중...</div>
//     }
//     if(!articles){
//         return null;
//     }

//     return(
//         <div className='NewsListBlock'>
//             {articles.map(article=>(<NewsItem key={article.url} article={article} />))}
//         </div>
//     )
// }

export default NewsList;