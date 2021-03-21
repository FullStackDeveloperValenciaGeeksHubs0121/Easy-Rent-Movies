import React from  'react'
import './Peliculas.scss';
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Header from '../../components/Header/Header'

const Peliculas =()=>{




    return(

        <div className="contaniner">
            <Header/>
            <div className="contenido">
                <div className="showMovies"></div>
                <div className="separador"></div>
                <div className="findMovies"></div>

            </div>


        </div>
    )
}

export default Peliculas;