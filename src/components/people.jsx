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
      <div>
      <h3 id="publication-header" className="animated bounce">Members</h3>
      <hr className="my-4"/>
      <div className="row">
        {this.state.profiles.map(item => (
          <Person key={item._id} myprop={item} />
        ))}
      </div>
      </div>
    );
  }
}

export default People;
