import React from "react";

//components
import { Header } from "../components/Header/header";
import { Job } from "../components/Job/job";
import { SearchJob } from "../components/Form/searchJob";



class Home extends React.Component {

  render() {

    return (
      <div>
        <Header></Header>
        <SearchJob></SearchJob>
        <Job></Job>
      </div>
    );
  }
}

export default Home;
