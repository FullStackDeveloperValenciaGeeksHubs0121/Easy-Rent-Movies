import React from 'react';
import './Movie.scss';
import {useHistory} from 'react-router-dom';


const Movie =({title,poster_path,overview,release_date,vote_average,id,onClick}) =>{


    let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';
    
    let history = useHistory();

    

    return(
        <div className="container">
            <img className = "movieCard" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
            <div className="info">
            <h3 className="title">{title}</h3>
            <div className="rate"></div>
            </div>
            
        </div>
    )
}
export default Movie;