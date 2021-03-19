import React from 'react';

//import '../../Global.scss';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import './Home.scss';

const Home = (props)=>{
     
    
    
     return(
         
        
        <div>

           <Header/>
           <div className="Contenedor">
               <div className="genero">
               <div className="tituloDelGenero" >
               <h2 className="h2">Fantasia</h2>
               </div>
               <div className="cardMovies"></div>
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