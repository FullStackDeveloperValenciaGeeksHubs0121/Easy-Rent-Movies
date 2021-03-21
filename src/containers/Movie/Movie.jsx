import React from 'react';
import './Movie.scss';


const Movie =({title,poster_path,overview,release_date,vote_average,id,onClick}) =>{


    let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';
    
     

    
    
    return(
        <div className="container">
            <img className = "movieCard moviCard2" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
            <div className="info">
            <h3 className="title">{title.split(' ')[0]}</h3>
            <div className="rate"></div>
            </div>
            
        </div>
    )
}
export default Movie;