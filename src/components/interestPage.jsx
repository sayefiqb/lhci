import React, { Component } from "react";
import { getAreaOfInterestById } from "../resources/sampleData";
import News from './news';

const InterestPage = ({ match, history }) => {
  console.log(match.params.id);
  let interest = getAreaOfInterestById(match.params.id);

  return (
    <div>
      <h1 className="display-4">{interest.title}</h1>
      <div className="row">
        <div className="col-sm-5">
          <img src={`./.${interest.image_url}`} alt="" style={{width: "80%", marginBottom: "20px"}}/>
        </div>
        <div className="col-sm-7">
  <dd class="col-sm-9">{interest.description}</dd>
        </div>
      </div>
      <News/>
      <button className="btn btn-primary" onClick={()=>history.push('/areaOfInterest')} style={{marginBottom: "20px"}}>Back</button>
    </div>
  );
};

export default InterestPage;
