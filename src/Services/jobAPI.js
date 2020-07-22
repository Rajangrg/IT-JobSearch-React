import axios from "axios";

export const getAllJobApi = async () => {
  const response = await axios
    .get(
      `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json`
    )
    .then(({ data }) => data)
    .catch((err) => console.error(err));
    return response;
};



//for future reference
//https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york