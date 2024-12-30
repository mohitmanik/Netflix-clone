import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = ({title,category}) => {

  const [apiData , setapiData] = useState([]); 
  const cardRef = useRef(); 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`
    }
  };
  
  
  const handlewheel = (event)=>{
    event.preventDefault();  
    cardRef.current.scrollLeft += event.deltaY; 
    
  }
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results))
    .catch(err => console.error(err));

    cardRef.current.addEventListener("wheel",handlewheel); 
  },[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>  
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`}className="card"key={index}>
   <img src={`https://image.tmdb.org/t/p/w500` + card.poster_path} alt="" />
   <p>{card.title}</p>
         </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
