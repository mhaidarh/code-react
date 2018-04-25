import React from "react";
import axios from "axios";

const NAME = process.env.REACT_APP_NAME;
const API_URL = process.env.REACT_APP_API_URL;

class ContentEnv extends React.Component {
  state = {
    data: []
  };

  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get(`${API_URL}/todos`).then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={this.getData}>{NAME}</h1>
        <a href={API_URL}>{API_URL}</a>
        <ul>
          {this.state.data.map((item, index) => {
            return <li key={index}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ContentEnv;
