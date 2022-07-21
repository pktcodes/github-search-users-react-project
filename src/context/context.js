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
  return (
    <GithubContext.Provider value={"hello - context works"}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
