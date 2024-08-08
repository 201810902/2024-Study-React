import {NavLink} from 'react-router-dom';

const categories =[
    {
        name: 'all',
        text: '전체'
    },
    {
        name: 'business',
        text: '비지니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
];

const Categories =({onSelect, category})=>{
    return(
        <div className="CategoriesBlock">
            {categories.map(c=>(<NavLink className="Category" activeClassName={({isActive})=>(isActive?'active':undefined)} key={c.name} to={c.name==='all'?'/':`/${c.name}`}>{c.text}</NavLink>))}
        </div>
    )
}

export default Categories;