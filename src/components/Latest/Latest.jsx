import React from 'react';
import './Latest';
import {useHistory} from 'react-router-dom';


const Latest =({title,poster_path,overview,release_date,vote_average,id,onClick}) =>{


    let FirstPartOflinkimage ='https://image.tmdb.org/t/p/original';
    
  

    

    return(
        <div className="container">
            <img className = "latestMoviesCard" src={FirstPartOflinkimage+poster_path} alt={title} onClick={onClick}/>
            
        </div>
    )
}
export default Latest;