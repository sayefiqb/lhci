import React, { Component } from "react";
import { getProfileById } from "../resources/sampleData";

const Detail = ({ match, history }) => {
  let myprofile = getProfileById(match.params.id);
  console.log(myprofile);
  console.log(myprofile.image_url)
  return (
    <div>

<div class="col-container">
  <div id="detail-jmb" className="col jumbotron" style={{paddingTop: "0px"}}>
            <h1 className="display-4 animated bounce">{myprofile.name}</h1>
            <p className="lead animated bounce">
             {myprofile.about}
            </p>
            <hr className="my-4" />
            <dd class="col-sm-9">
              <strong>{myprofile.department}</strong>
            </dd>
            
            {myprofile.education.map(e=>(<dd class="col-sm-9">{e}</dd>))}
            
            <p>
              
            </p>
          
  </div>

  <div class="col">
  {/* <div id="detail-card"> */}
  <img id="img" src={`./../${myprofile.image_url}`} style={{width: '300px'}} alt=""/>
  <div id="detail-card" class="card" style={{width: "18rem;"}}>
  <div class="card-body">
    <h5 class="card-title" style={{color: "#00004d"}}>Contact</h5>
    <p class="card-text"><strong  style={{color: "#00004d"}}>Email</strong> {myprofile.contact.email}</p>
    <p class="card-text"><strong  style={{color: "#00004d"}}>Phone</strong> {myprofile.contact.phone}</p>
    <p class="card-text">{myprofile.contact.address}</p>
    <a href="#" class="card-link">Google Scholar</a>
    <a href="#" class="card-link">Website</a>
  </div>
</div>
  {/* <button id="gs" className="btn btn-primary mb1 bg-blue">Google Scholar</button>
   <button id="gs" className="btn btn-primary mb1 bg-blue">Research Gate</button> */}
  {/* </div> */}
  </div>
</div>
      <h3 id="publication-header">Publications</h3>
      <hr className="my-4"/>
      <table>
        <tbody>
          {myprofile.publications.map(p => (
            <tr key={p.title}>
              <td>
                <a href="https://www.google.com">{p.title}</a>, {p.authors},{" "}
                {p.proceeding}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <button className="btn btn-primary" onClick={()=>history.push('/people')}>Back</button>
      <br/>
      <br/>
      </div>
  );
};

export default Detail;
