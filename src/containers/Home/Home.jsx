import React, { useEffect,useState } from 'react';
import Movie from '../Movie/Movie';
import {useHistory} from 'react-router-dom';
//import '../../Global.scss';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import './Home.scss';


const Home = (props)=>{


   //Hooks

   const [latest,setLatest]= useState([])
 


useEffect(()=>{

let Latest = "https://api.themoviedb.org/3/movie/now_playing?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1";


  fetch(Latest)
  .then(res =>(res.json()))
  .then(data =>{
     console.log(data)
     setLatest(data.results)
  })

  

},[]);

//Functions:

   let history = useHistory();
   
   const takeMeTo =(latest)=>{
     
      localStorage.setItem('latest',JSON.stringify(latest))
   
       setTimeout(()=>{history.push('/movieProfile')},500)
     

   }
   
    
     return(
         
        
        <div>

           <Header style='style1'/>
           <div className="Contenedor">
               <div className="genero">
                <div className="cardMovies">
                {latest.map(latest=> <Movie key={latest.id} {...latest} onClick={()=>takeMeTo(latest)}/>)} 
               </div>
           </div>

           <div className="presentacion">
           <h2 className="h2">ELIGE ENTRE UNA GRAN VERIEDAD DE PELICULAS </h2>
           <p className="phome">«SABEMOS QUE TE ENCANTA VER PELICULAS,<br/>
            EASY-MOVIE-RENT , ACERCA EL CINE A TU CASA,O DONDE QUIERA QUE ESTES!»</p>
           <br/>
           <p className='phome'>Registrate y navega por nuestro catalogo de mas de 1000 peliculas</p>
           <div className="casi" onClick={()=>history.push('/login')}>REGISTRATE AQUI  , Y DISFRUTA DE LA EXPERIENCIA</div>
           </div>
           </div>  
           <footer className="footer">
              <div className="copyright">Copyright</div>
              <div className="direccion">Calle Salamanca 24-25-66 460041 Valenia Spain</div>
              <div className="autor">
                 <div className="github"></div>
                 <div className="link"></div>
              </div>
           </footer>
        </div>    
    )
    
}

const mapPropstoState=(state)=>{
   return {
      latest :state.latest
   }
}
export default connect(mapPropstoState)(Home);