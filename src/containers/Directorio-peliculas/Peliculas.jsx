import React from  'react'
import './Peliculas.scss';
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Header from '../../components/Header/Header'
import Movie from '../Movie/Movie'

const Peliculas =()=>{

    
   let history=useHistory();
    const [movie,setMovie] =useState([]);



    useEffect(()=>{

        let Popular = 'https://api.themoviedb.org/3/movie/popular?api_key=ef2edc9da61e81787a8079a7df721936&language=es.ES&page=1';

        fetch(Popular)
        .then(res=> res.json())
        .then(data=>{console.log(data)
        setMovie(data.results)})
   
    },[])


     

    return(

        <div className="contaniner">
            <Header/>
            <div className="contenidoUno">
                <div className="showMovies">
                  {movie.map(movie=> <Movie key={movie.id} {...movie} onClick={()=>history.push('./movieProfile')}/>)}  
                </div>
                <div className="separadorMovies"></div>
                <div className="findMovies">
                    
                </div>
            </div>
            <div className="contenidoDos"></div>


        </div>
    )
}

export default Peliculas;