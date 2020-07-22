import React from "react";
import { getAllJobApi } from "../../Services/jobAPI";
import { JobCard } from "../ResuableCard/jobCard";
import { SearchJob } from "../Form/searchJob";

//UI components
import { Container } from "semantic-ui-react";

class Job extends React.Component {
  state = {
    jobList: [],
    jobTitle: "",
    location: "",
    loading: true,
  };

  getSearchResult = async (e) => {
    e.preventDefault();
    const jobTitle = e.target.elements.title.value;
    const location = e.target.elements.jobLocation.value;
    const data = await getAllJobApi(jobTitle, location);
    this.setState({
      jobList: data,
      jobTitle,
      location,
      loading: false,
    });
  };

  componentDidMount = async () => {
    const data = await getAllJobApi();
    this.setState({
      jobList: data,
      loading: false,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <SearchJob searchJob={this.getSearchResult}></SearchJob>
          <JobCard
            jobList={this.state.jobList}
            loadingState={this.state.loading}
          ></JobCard>
        </Container>
      </div>
    );
  }
}

export default Job;
