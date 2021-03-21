import React from 'react';
import Header from '../../components/Header/Header';
import './Movie-profile.scss';



const MProfile =()=>{

   let link ='https://image.tmdb.org/t/p/original';
   
   let datosMovie= JSON.parse(localStorage.getItem('movie'))
   console.log(datosMovie)
   


    return(

        <div className='contenedorMProfile'>

          <Header/>
          <div className="contenidoMProfile">
            <div className="movie">
              <div className="posterTitleRate">
                <div className="poster">
                  <img  className='poster' src={link+datosMovie.poster_path} alt={datosMovie.tite}/>
                </div>
                <div className="titleAndRate">
                <div className="titleProfile">
                  {datosMovie.title}
                </div>
                <div className="rateProfile">
                  {datosMovie.vote_average}
                </div>
                </div>
              </div>
              <div className="descriptionAndMore">
                <div className="description"></div>
                <div className="genre"></div>
                
              </div>
            
          </div>  
          </div>
          
        </div>
    )
}

export default MProfile;