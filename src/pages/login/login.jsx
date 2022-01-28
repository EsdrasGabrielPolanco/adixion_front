import React, { useEffect, useState } from "react";

import Header from "../../components/header/Header";
// import JobDetailMainSection from "../../components/job-detail-components/job-detail-main-section/JobDetailMainSection";
// import JobDetailDetailSection from "../../components/job-detail-components/job-detail-detail-section/JobDetailDetailSection";
// import JobDetailPriceSection from "../../components/job-detail-components/job-detail-price-section/JobDetailPriceSection";

import { login } from "../../api/apiCalls";
import { formatJobUrl } from "../../utils/formater"


// import "./Login.css";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await login({email: email, password: password});

        console.log(res)
    }

    return(
        <div className="job-detail-page">
            <Header/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;