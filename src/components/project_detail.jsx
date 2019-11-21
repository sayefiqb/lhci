import React, { Component } from "react";
import { getProjectById } from "./../resources/sampleData";

const Project_Detail = ({ match, history }) => {
  console.log(history);
  let myproject = getProjectById(match.params.id);
  console.log(myproject);
  return (
    <div className="container-fluid project">
      <div className="project-card">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">{myproject.title}</h1>
            <hr className="my-4" />
            <br />
            <h4>Abstract</h4>
            <br />
            <p className="lead">{myproject.abstract}</p>
           <a href={myproject.link}><button className="btn btn-primary" >Read full paper</button></a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              className="project_img"
              src={require("../pic1.png")}
              style={{ width: "400px", height: "400px" }}
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <img
              className="project_img"
              src={require("../pic2.png")}
              style={{ width: "400px", height: "400px" }}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img
              className="project_img"
              src={require("../pic3.png")}
              style={{ width: "400px", height: "400px" }}
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <img
              className="project_img"
              src={require("../pic4.png")}
              style={{ width: "400px", height: "400px" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={()=> history.push('/projects')}>Back</button>
    </div>
  );
};

export default Project_Detail;
