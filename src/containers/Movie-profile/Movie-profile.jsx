import React ,{useState,useEffect} from 'react';
import Header from '../../components/Header/Header';
import './Movie-profile.scss';
import ReactPlayer from 'react-player'
import Movie from '../Movie/Movie';

const MProfile =()=>{

   let link ='https://image.tmdb.org/t/p/original';

   // same seria la variable que seteare con las peliculas relacionadas con el mismo genero

   const [same,setSame] = useState([])
   
    let api_key ='ef2edc9da61e81787a8079a7df721936';
    let endpointGenre ='https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US';

    
    let datosMovie= JSON.parse(localStorage.getItem('movie'))
    let genre = datosMovie.genre_ids;
    
   
    let arrayDepelicula=[];
    useEffect(()=>{
      
        fetch(endpointGenre)
        .then(res=>res.json())
        .then(data=>{console.log(data.results)
          let pelis=[]
          console.log(pelis)
          data.results.map(element=>{
           
            
            if(element.genre_ids[0]  == genre[0] || element.genre_ids[0] == genre[1] || element.genre_ids[0] == genre[2]){
         
             // return localStorage.setItem('same',JSON.stringify(element))
              pelis.push(element)
              
               
            }
            
          })
        setSame(pelis)
        })
    },[])
   
    
     let sameMovie = JSON.parse(localStorage.getItem('same'))
     
     console.log(sameMovie)

    return(

        <div className='contenedorMProfile'>

          <Header/>
          
          <div className="contenidoMProfile">
            <div className="same">
                {same.map(same=> <Movie key= {same.id}  {...same} />)}
            </div>
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
                <button className="addTocard">AÑADIR A MI CARRITO</button>
                <div className="genre"><h1 className='h1Profile'>{datosMovie.original_title}</h1></div>
                <h2 className='h2Profile'>Sinopsis:</h2>
                <div className="description"><br/>
                {datosMovie.overview}</div>
                
                
              </div>

            
          </div>  
        
          </div>
          <div className="separadorProfile"></div>
          <div className='peliculasRelacionadas'>

            <div className="derecha"><ReactPlayer
          url='https://youtu.be/YptziB_s4l8'
          className='react-player'
          playing
          width='100%'
          height='100%'
        /></div>
        <div className="izquierda">
          
        </div>
          
          </div>
        </div>
    )
}

export default MProfile;