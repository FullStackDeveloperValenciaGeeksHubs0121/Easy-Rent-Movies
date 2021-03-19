import React from 'react';
import './Header.scss';
import easyRentMovies from '../../img/easyrentmovies.jpg';

const Header = (props)=>{
    let home = true

    if( home= true){

        return(
              
            <div className="vistaHeader">

                <div className="logo">
                    <img  className="logo" src={easyRentMovies}/>
                </div>

                <div className="loginRegister">
                <div className="login">Login</div>
                <div className="register">Register</div>
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