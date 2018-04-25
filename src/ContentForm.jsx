import React from "react";

class ContentForm extends React.Component {
  state = {
    name: ""
  };

  constructor() {
    super();

    this.uppercase = this.uppercase.bind(this);
    this.lowercase = this.lowercase.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  uppercase() {
    const name = this.state.name;
    console.log("uppercase:", name.toUpperCase());
  }

  lowercase() {
    const name = this.state.name;
    console.log("lowercase:", name.toLowerCase());
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Type your name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input type="button" value="UPPERCASE" onClick={this.uppercase} />
        <input type="button" value="lowercase" onClick={this.lowercase} />
      </form>
    );
  }
}

export default ContentForm;
