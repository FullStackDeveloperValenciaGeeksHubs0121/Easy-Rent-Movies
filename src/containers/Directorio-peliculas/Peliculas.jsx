import React from  'react'
import './Peliculas.scss';
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Header from '../../components/Header/Header';
import Movie from '../Movie/Movie';



const Peliculas =()=>{

    
   

    const [popular,setPopular] =useState([]);
    const [latest,setLatest] =useState([]);


    useEffect(()=>{
       

        let Popular = 'https://api.themoviedb.org/3/movie/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=es.ES&page=1';

        let latest ='https://api.themoviedb.org/3/movie/top_rated?api_key=ef2edc9da61e81787a8079a7df721936&language=en-US&page=1';

      // Populares

        fetch(Popular)
        .then(res=> res.json())
        .then(data=>{console.log(data)
        setPopular(data.results)})

      // latests
        
      
      fetch(latest)
      .then(res=> res.json())
      .then(data=>{console.log(data)
      setLatest(data.results)})
        
    },[])

    let history=useHistory();
    const takeMeTo =(movie)=>{
     
       localStorage.setItem('movie',JSON.stringify(movie));
       let LittleJson = JSON.parse(localStorage.getItem('movie'));
       console.log(LittleJson);
  
    history.push('/movieProfile')
 }
     

    return(

        <div className="contaniner">
            <Header style='style2'/>
            <div className="contenidoUno">
                <div className="showMovies">
                  {popular.map(popular=> <Movie key={popular.id} {...popular} onClick={()=>takeMeTo(popular)}/>)}  
                </div>
                
            </div>
            <div className="contenidoDos">
            {latest.map(latest=> <Movie key={latest.id} {...latest} onClick={()=>takeMeTo(latest)}/>)}
            </div>


        </div>
    )
}

export default Peliculas;