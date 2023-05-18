import axios from "axios";

const getCommits = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_GITHUB}commit/renzozuniga/github-repository`,
      {
        headers: {
          "Content-Type": "application/json",
          accept: " */*",
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

const CommitService = {
  getCommits,
};

export default CommitService;
