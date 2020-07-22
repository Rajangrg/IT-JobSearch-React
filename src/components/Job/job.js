import React, { useState, useEffect } from "react";
import { getAllJobApi } from "../../Services/jobAPI";
import { JobCard } from "../ResuableCard/jobCard";

//UI components
import { Container } from "semantic-ui-react";

export const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      setJobs(await getAllJobApi());
    };
    getJobs();
  }, [setJobs]);

  //console.log(jobs)

  return (
    <div>
      <Container>
        <JobCard  jobList={jobs}></JobCard>
      </Container>
    </div>
  );
};
