import React, {  useState } from "react";
import {useParams} from "react-router-dom";
// import JobDetailPage from "../job-detail/JobDetailPage";


const ServicesPage = () => {
    const [Job] = useState(useParams().job)
  
    // if(Job) {
    //     return <JobDetailPage
    //                 job={Job}
    //             />
    // }
    
    return(
        <>
            <p> <u>Wolly Services</u> </p>
        </>
    )
}

export default ServicesPage;