import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

// From createContext we get two components
// Provider - GithubContext.Provider
// Consumer - is skipped as useContext is being used

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      //axios gives promise so .then() and .catch() and response in json format

      // destructing the data object from the response
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          //show an error
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
