import React from "react";

class User extends React.Component {
  constructor(props) {
    console.log(props.name + "constructor called")
    super(props);
    this.state = {
        count: 0,
        user: {}
    }
  }

  async componentDidMount() {
    console.log(this.props.name + "component did mount called");
    const data = await fetch("https://api.github.com/users/aayushigupt");
    const json = await data.json();
    this.setState({
      user: json
    })
  }

  componentDidUpdate() {
    console.log("component did update called")
  }

  componentWillUnmount() {
    console.log("component will unmount called")
  }

  render() {
    console.log(this.props.name + "render called")
    const { login = "", name = "" } = this.state.user
    const { count } = this.state;
    return (
      <div>
        <h5> Count: {count} </h5>
        <button onClick={() => {
            this.setState({
                count: count + 1
            })
        }}> Count Increase </button>
        <span> Username: {login} </span>
        <span> Name: {name} </span>
        <span> Designation: {"SSE-1"} </span>
      </div>
    );
  }
}

export default User;