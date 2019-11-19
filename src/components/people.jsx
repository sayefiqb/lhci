import React, { Component } from "react";
import Person from "./person";
import { getProfiles } from './../resources/sampleData';

class People extends Component {
  state = {
    profiles: getProfiles()
  };
  render() {
    console.log(this.state.profiles)
    return (
      <div className="row">
        {this.state.profiles.map(item => (
          <Person key={item._id} myprop={item} />
        ))}
      </div>
    );
  }
}

export default People;
