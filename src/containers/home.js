import React from "react";

//components
import { Header } from "../components/Header/header";
import { Job } from "../components/Job/job";


class Home extends React.Component {

  render() {

    return (
      <div>
        <Header></Header>
        <Job></Job>
      </div>
    );
  }
}

export default Home;
