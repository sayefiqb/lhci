import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAreaOfInterests } from "../resources/sampleData";



class AreaOfInterest extends Component {
  state = { interests: getAreaOfInterests() };
  render() {
    return (
      <div className="row">
        {this.state.interests.map(interest => (
          <div className="col-sm-6">
             <Link to={`/areaOfInterest/${interest.id}`}>
            <div id="about-card" className="card text-white">
              <img
                id="card-img"
                src={interest.image_url}
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <h4 className="card-title">{interest.title}</h4>
                <p className="card-text">{interest.summary}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default AreaOfInterest;
