import React, {  useState } from "react";
import {useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";

import logo from "../../assets/logo.png"


const ServicesPage = () => {
    const history = useHistory()

    const logOut = ()=>{
        history.push("/login")
        localStorage.clear()
    }
    return(
        <div className="main">
            <img src={logo} alt="main-logo" srcset="" className="main-logo" />
            <h2> <u>Adixion Capital FX</u> </h2>
            <p className="" onClick={logOut}>cerrar sesion</p>
        </div>
    )
}

export default ServicesPage;