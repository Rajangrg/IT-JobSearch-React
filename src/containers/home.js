import React from "react";

//components
import { Header } from "../components/Header/header";
import { Job } from "../components/Job/job";
import { SearchJob } from "../components/Form/searchJob";

class Home extends React.Component {
  state = {
    jobTitle: "",
    location: "",
  };

  getSearchResult = (e) => {
    e.preventDefault();
    const jobTitle = e.target.elements.title.value;
    const location = e.target.elements.jobLocation.value;
    this.setState({
      jobTitle,
      location,
    });
  };

  render() {
    console.log(this.state.jobTitle)
    console.log(this.state.location)
    return (
      <div>
        <Header></Header>
        <SearchJob searchJob={this.getSearchResult}></SearchJob>
        <Job></Job>
      </div>
    );
  }
}

export default Home;
