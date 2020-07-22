import React from "react";
import { getAllJobApi } from "../../Services/jobAPI";
import { JobCard } from "../ResuableCard/jobCard";
import {SearchJob} from '../Form/searchJob';

//UI components
import { Container } from "semantic-ui-react";

class Job extends React.Component{
  state = {
    jobList:[],
    jobTitle: "",
    location: "",
  };

  getSearchResult = async (e) => {
    e.preventDefault();
    const jobTitle = e.target.elements.title.value;
    const location = e.target.elements.jobLocation.value;
    const data = await getAllJobApi(jobTitle, location) 
    this.setState({
      jobList: data,
      jobTitle,
      location,
    });
  };

  componentDidMount = async()=>{
    const data = await getAllJobApi() 
    this.setState({
      jobList: data,  
    });
  }

 render(){
   return(
    <div>
    <Container>
      <SearchJob searchJob={this.getSearchResult}></SearchJob>
      <JobCard  jobList={this.state.jobList} ></JobCard>
    </Container>
  </div>
   )
 }
} 
 
export default Job

