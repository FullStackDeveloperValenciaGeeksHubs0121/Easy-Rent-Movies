import React from 'react';
import './Header.scss';
import logo from '../../img/logo.jpg'
import {useHistory} from 'react-router-dom';

const Header = (props)=>{
    let history=useHistory();
    let home=1;

    if( home=== 1){

        return(
              
            <div className="vistaHeader">

                <div className="logo">
                    <img  onClick={()=>history.push('/')} className="logo" src={logo} alt="."/>
                </div>

                <div className="nav">
                <div className="inicio" onClick={()=>history.push('/')}>INICIO</div>
                <div className="directorio" onClick={()=> history.push('/peliculas')}>DIRECTORIO PELICULAS</div>
                <div >
                   <input className="search" type="text" placeholder=" Busqueda..."/>
                </div>
                
                <div className="login" onClick={()=> history.push('./login')}>LOGIN</div>

                </div>
              
                
                
            </div>
        )
    }else{

     return(

        <div>
            <div className="logo"><img  className="logo" src={logo} alt="."/></div>
            <div className="cliente"></div>
            <div className="Logout"></div>
        </div>
    )
}
}
export default Header;