import React from 'react';
import './Movie.scss';


const Movie =({title,poster_path,overview,release_date,vote_average}) =>{

    let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';


    return(
        <div>
            <img className = "movieCard" src={FirstPartOflinkimage+poster_path} alt={title}/>
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    )
}
export default Movie;