import React from "react";
import User from "./User";
import UserContext from "./utils/context/UserContext";

class About extends React.Component {
  constructor(props) {
    // console.log("parent" + "constructor called")
    super(props);
  }

  componentDidMount() {
    // console.log("parent" + "component did mount called")
  }

  render() {
    // console.log("parent" + "render called")
    return <div>
      About
      <UserContext.Consumer>
        {({loggedInUser}) => <div> {loggedInUser} </div>}
      </UserContext.Consumer>
      <User userName="aayushigupt" name="Aayushi Gupta" designation="SSE-1" />
      {/* <User userName="nishchayverma20" name="Nishchay Verma" designation="UI-2" /> */}
    </div>;
  }
}

export default About;
