import React from 'react';
import './Header.scss';

import logo from '../../img/logo.jpg'

const Header = (props)=>{
    let home=1;

    if( home=== 1){

        return(
              
            <div className="vistaHeader">

                <div className="logo">
                    <img  className="logo" src={logo} alt="."/>
                </div>

                <div className="nav">
                <div className="inicio">INICIO</div>
                <div className="directorioPelis">DIRECTORIO ANIME</div>
                <div >
                   <input className="search" type="text" placeholder=" Busqueda..."/>
                </div>
                
                <div className="login">LOGIN</div>

                </div>
              
                
                
            </div>
        )
    }else{

     return(

        <div>
            <div className="logo"></div>
            <div className="cliente"></div>
            <div className="Logout"></div>
        </div>
    )
}
}
export default Header;