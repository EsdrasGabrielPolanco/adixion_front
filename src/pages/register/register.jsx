import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


import { register } from "../../api/apiCalls";
import logo from "../../assets/logo.png"



const Login = (props) => {
    const history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await register({email: email, password: password,firstName:firstName, lastName:lastName});
        if(res.message == "Nuevo usuario creado"){
            history.push("/login")
        }
        
    }
    const handleRegister = ()=>{
        history.push("/login")
    }

    return(
        <div className="main">
             <img src={logo} alt="main-logo" srcset="" className="main-logo" />
            <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="firstName">Nombre:</label>
                <input 
                required
                 className="input"
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="lastName">Apellido:</label>
                <input 
                required
                 className="input"
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input 
                required
                 className="input"
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Contraseña:</label>
                <input 
                required
                 className="input"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
               

                {/* <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                <input 
                 className="input"
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /> */}

                <button className="login-button" type="submit">Registrar</button>
            </form>
            <span onClick={handleRegister} className="register-redirect">¿Tienes una cuenta? Inicia Sesion!</span>
        </div>
    )
}

export default Login;