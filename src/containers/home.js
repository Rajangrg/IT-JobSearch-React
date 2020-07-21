import React from "react";

//components
import { Header } from "../components/Header/header";
import { getAllJob } from "../Services/jobAPI";

class Home extends React.Component {
  state = {
    job: []
  };

 componentDidMount = async ()=>{
   const fetchResult = await getAllJob();
  this.setState({
    job: fetchResult
  })
 }

  render() {
    console.log(this.state.job)
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}

export default Home;
