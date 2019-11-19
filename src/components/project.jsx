import React, { Component } from "react";
import { Link } from 'react-router-dom';

const Project = (props) => {
  let path = "/projects/"+props.myprop.id;
  return (
  <div id="project-card" class="card w-100">
  <div class="card-body">
  <h5 class="card-title">{props.myprop.title}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to={path} className="btn btn-primary">View Project</Link>
  </div>
</div>
    // <div className="container">
    //   <div className="row">
    //     <div className="jumbotron">
    //       <div className="container">
    //         <h3 className="display-4">
    //           {props.myprop.title}
    //         </h3>
    //         <br/>
    //         <Link to={path} className="btn btn-primary">View Project</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Project;

