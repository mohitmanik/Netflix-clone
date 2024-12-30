import React, { useEffect, useRef, useState } from 'react';
import './TvShows.css';
import { Link } from 'react-router-dom';

const TvShows = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardContainerRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:i`Bearer ${import.meta.env.VITE_AUTH_KEY}`,
    },
  };

  const handleWheelScroll = (event) => {
    event.preventDefault();
    cardContainerRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardContainerRef.current.addEventListener('wheel', handleWheelScroll);

    return () => {
      cardContainerRef.current.removeEventListener('wheel', handleWheelScroll);
    };
  }, [category]);

  return (
    <div className="tvshows-section">
      <h2 className="tvshows-heading">{title ? title : 'TvShows'}</h2>
      <div className="tvshows-container" ref={cardContainerRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="tvshow-item" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                alt={card.title}
                className="tvshow-image"
              />
              <p className="tvshow-title">{card.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TvShows;
