import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Person = (props) => {
    console.log(props.myprop._id);
    let path = "/people/"+props.myprop._id;
    return (
    <div className="col-sm-3">
    <div id="card" className="card text-center" style={{width: "14rem", height: "20rem"}}>
    <div className="card-body">
    <h5 className="card-title">{props.myprop.title}</h5>
    <img id="img" src={props.myprop.image_url} style={{width: '140px', height: '140px'}} alt=""/>
    <br/>
    <br/>
    <p className="card-text">{props.myprop.name}</p>
    <Link to={path} className="btn" id="button">View Profile</Link>
    </div>
  </div>
  </div>);
}
 
export default Person;