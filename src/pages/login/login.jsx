import React, { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import JobDetailMainSection from "../../components/job-detail-components/job-detail-main-section/JobDetailMainSection";
import JobDetailDetailSection from "../../components/job-detail-components/job-detail-detail-section/JobDetailDetailSection";
import JobDetailPriceSection from "../../components/job-detail-components/job-detail-price-section/JobDetailPriceSection";

import { getJobByTypeAndTitle } from "../../api/apiCalls";
import { formatJobUrl } from "../../utils/formater"


import "./JobDetailPage.css";

const JobDetailPage = (props) => {

    const jobTitle = window.location.href.toString().split("/")[3].split("?")[1];
    const vertical = props.job;

    const [job, setJob] = useState();

    useEffect( () => {
        searchJobDetails();
    },[]);

    const searchJobDetails = async () =>{
        const formatedParams = formatJobUrl(jobTitle, vertical);
        const jobDetails = await getJobByTypeAndTitle(formatedParams.jobTitle, formatedParams.vertical);
        setJob(jobDetails);
    }

    return(
        <div className="job-detail-page">
            <Header/>
            <JobDetailMainSection
                job = {job}
            />
            <JobDetailDetailSection/>  
            <JobDetailPriceSection/>  
        </div>
    )
}

export default JobDetailPage;