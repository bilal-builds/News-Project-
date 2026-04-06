<span className={theme==="light"?"light activeTheme":"light"} onClick={()=>setTheme("light")}></span>
import { useState } from "react";
import Nav from "./Nav";
export default function Header({getKeywords}){
// const onChangeHandler=(event)=>{
//   const value=event.target.value===''?false:true;
//  setKeywords(value);

// }
  const [active,setActive]=useState(false);
   const [keywords,setKeywords]=useState('')
  return(<>
  
   <header style={{background:${active?"red":"pink"}}}>
    <div className="logo">Awesome News</div>
    <input  onChange={getKeywords}
      
    />
    {/* <p>The keywords are:{keywords}</p> */}
    <Nav/>
   </header>
  
  </>);
} header
export default function NewsItem({item}) {
  return (
    <div className="news_item">
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
}
import NewsItem from "./NewsItem";

export default function NewsList({ news }) {
  return (
    <>
      {news.map(item => (
        <NewsItem key={item.id} item={item} />
      ))}
    </>
  );
}
 body{
    margin:0;
 }

a {
    color: inherit;
    text-decoration: none;
}


.logo {
    color:#C08552;
    font-size: 40px;
    font-family:Anton;   
 }

header {
    background: #FFF8F0;
    text-align: center;
    border-bottom: 5px solid #3e3e3e;
    padding-bottom: 10px;
 }
 header input {
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 10px;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
}
.container {
    margin:0 auto;
    width:90%;
}
button {
    display: block;
    width: 110px;
    margin: 10px 0px;
}
nav {
    border-top: 1px solid white;
    margin-top: 20px;
}
  
.mainNav ul {
    list-style-type: none;
    padding-left: 0;
}
  
  .navItem {
    display: inline-block;
    color: #4B2E2B;
    font-size: 24px;
    font-family: Anton;
    margin-right: 10px;
  }
  
  .navItem a::after {
    display: inline-block;
    color: #000;
    font-weight: bold;
    padding: 0 3px;
    content: "|";
    margin-right: 10px;
  }

  .news_item {
    padding:20px;
    box-sizing: border-box;
    border-bottom:1px solid grey
 }
import { useState } from "react";
import Header from "./components/header/Header";
import NewsItem from "./components/NewsItem";
import NewsList from "./components/NewsList";
import { newsData } from "./utils/data";
export default function App(){
  const[news,setNews]=useState(newsData)
  const getKeywords=(event)=>{
    let keywords= console.log(event.target.value);
    let filtered=newsData.filter(item=>{
      return item.title.indexOf(keywords)>-1;
    })
    setNews(filtered)
  }
   return(<>
  <Header getKeywords={getKeywords}/>
  <NewsList news={news}/>

  
  
  </>);
}
import { navItems } from "../../utils/data";
export default function Nav(){
    return(<>
    <nav className="mainNav">
      <ul>
        {navItems.map(item=>(
         <li className="navItem" key={item.Id}>
           <a href={item.link} >{item.title}</a>
        </li>
        ))
        }
        
        
        </ul>
    </nav>
    </>);
}
 export const navItems=[

        {Id:'1',link:'/articles',title:'Article'},
        {Id:'2',link:'/sports',title:'Sports'},
        {Id:'3',link:'/music',title:'Music'},
        {Id:'4',link:'/art',title:'Art'},
        {Id:'5',link:'/history',title:'History'}

    ]
    export const newsData = [
  {
    id: 1,
    title: "Food: string available",
    feed: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
  },
  {
    id: 2,
    title: "The importance of REACT in the development",
    feed: "At vero eos et accusamus et iusto odio dignissimos ducimus qui"
  },
  {
    id: 3,
    title: "REACT developers going on strike",
    feed: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis"
  },
  {
    id: 4,
    title: "New JavaScript features released",
    feed: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse"
  },
  {
    id: 5,
    title: "Frontend trends in 2026",
    feed: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  }
];