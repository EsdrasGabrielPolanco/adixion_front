import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header";

import { login } from "../../api/apiCalls";
import logo from "../../assets/logo.png"

import "./login.css";




const Login = (props) => {
    const history = useHistory()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState("");



    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await login({email: email, password: password})
        
        if (res.status != 201){
            setErrorText(res.message)
            setIsError(true)
        }else if(res.status == 201){
            localStorage.setItem("accesToken",res.token)
            history.push("/home")
        }
    }
    const handleRegister = ()=>{
        history.push("/register")
    }

    return(
        <div className="main">
            <img src={logo} alt="main-logo" srcset="" className="main-logo" />
            <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />

                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    />

                    { isError && (<span className="errorLogin">{errorText}</span>)}
                <button className="login-button" type="submit">Login</button>
            </form>
            <span onClick={handleRegister} className="register-redirect">¿No tienes una cuenta? Registrate!</span>
        </div>

    )
}

export default Login;