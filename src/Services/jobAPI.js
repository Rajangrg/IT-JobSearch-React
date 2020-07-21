import axios from "axios";

export const getAllJob = async () => {
  const response = await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york`
    )
    .then(({ data }) => data)
    .catch((err) => console.error(err));
    return response;
};

