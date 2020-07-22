import axios from "axios";

const BASE_URL = `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json`;

export const getAllJobApi = async (jobTiltle, location) => {
  let changableUrl = BASE_URL;
  //validation
  if (jobTiltle && location) {
    changableUrl = BASE_URL + `?description=${jobTiltle}&location=${location}`;
  }

  const response = await axios
    .get(changableUrl)
    .then(({ data }) => data)
    .catch((err) => console.error(err));
  return response;
};

//for future reference
//https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york
