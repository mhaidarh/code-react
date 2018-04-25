import React from "react";

const NAME = process.env.REACT_APP_NAME;
const API_URL = process.env.REACT_APP_API_URL;

const ContentEnv = () => {
  return (
    <div>
      <h1>{NAME}</h1>
      <a href={API_URL}>{API_URL}</a>
    </div>
  );
};

export default ContentEnv;
