import React, { useEffect } from 'react';

//import '../../Global.scss';
//import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import './Home.scss';
import axios from 'axios';

const Home = (props)=>{

   


   useEffect(()=>{
console.log('Estoy aqui en el component didmount')

   },[])

   useEffect(()=>{

console.log('Ahora estoy aqui en el didupdate')
   },[])


  
// Traer las peliculas de TMdb

  let bringMe = async ()=>{
   
   let LatestMoviesEndpoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1";

    let res = await axios.get(LatestMoviesEndpoint);
    let datos = res.data.results;
    console.log(datos);
    
    
    datos.forEach(element => {
      
         
         let titulo = document.getElementById('1'); 
        
        const render =()=>{
           titulo.innerHTML += <div className="titulo">{JSON.stringify(element.title)}</div>;
           titulo.innerHTML += <img src={`https://image.tmdb.org/t/p/original${JSON.stringify(element.poster_path)}`} alt="."></img>
           console.log(element.title);
           console.log(element.poster_path);
   

        }
        render();
         
          
       }
       
    );
    

  }
  bringMe();
    
     return(
         
        
        <div>

           <Header/>
           <div className="Contenedor">
               <div className="genero">
               <div className="tituloDelGenero" >
               <h2 className="h2">Fantasia</h2>
               </div>
               <div className="cardMovies" id="1">
                
                
               </div>
               <div className="Separacion"></div>
               </div>
               
               <div className="genero">
                <div className="tituloDelGenero">   
               <h2 className="h2">Ciencia-Ficción/Actión</h2>
               </div>
               <div className="cardMovies"></div>
               <div className="Separacion"></div>
               </div>
               <div className="genero">
               <div className="tituloDelGenero">   
               <h2 className="h2">Latest</h2>
               </div>
               <div className="cardMovies"></div>
               <div className="Separacion"></div>
               </div>
               <div className="genero">
               <div className="tituloDelGenero">   
               <h2 className="h2">Policiacas</h2>
               </div>
               <div className="cardMovies"></div>
               <div className="Separacion"></div>
               </div>
               <div className="genero">
               <div className="tituloDelGenero">   
               <h2 className="h2">Infantil</h2>
               </div>
               <div className="cardMovies"></div>
               <div className="Separacion"></div>
               </div>
               <div className="genero">
               <div className="tituloDelGenero">   
               <h2 className="h2">Terror</h2>
               </div>
               <div className="cardMovies"></div>
               <div className="Separacion"></div>
               </div>
               
            </div>

         </div>   
    )
    
}

export default Home;