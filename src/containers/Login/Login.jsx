import React from 'react';
import './Login.scss';
import {Form} from 'antd'
import FormInput from '../../components/FormInput/FormInput'
import Header from '../../components/Header/Header'


const Login =(props)=>{




    return(

<div>

      <Header/>
        <section className="loginContainer">
        
            <div className="Login">
                <h2>¡Hola otra vez!</h2>
                <p>Introduce tu email y tu contraseña para acceder al área de cliente y pedir cita.</p>
                <div className="inputContainer">
                    <Form.Item  >
                        <FormInput label="Correo Electrónico" name="email"  maxLength="50"></FormInput>
                    </Form.Item>
                </div>
                <div className="inputContainer">
                    <Form.Item >
                        <FormInput type="Password" label="Contraseña" name="password"  maxLength="99"></FormInput>
                    </Form.Item>
                </div>
                <div className="buttonContainer">
                    <button goto="login" text="Acceder" styling="CTA" />
                </div>
            </div>
            <div className="separador">
                
            </div>
            <div className="Register">
                <h3>¿Aún no nos conoces?</h3>
                <p>Si aun no estas registrado, puedes hacerlo haciendo click aqui abajo.</p>
                <div className="buttonContainer">
                    <button goto="register" text="Regístrate" styling="alt"/>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Login;