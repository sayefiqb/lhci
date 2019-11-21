import React, { Component } from "react";
import { getProfiles } from "./../resources/sampleData";

class Publication extends Component {
  state = { profiles: getProfiles() };
  
  
  render() {
    return (
      <div>
      <h3 id="publication-header"  className="animated bounce">Publications</h3>
      <table>
        <hr className="my-4"/>
        <tbody>
          {this.state.profiles.map(profile => 
            profile.publications.map( p => (
              <tr key={p.title}>
                <td>
                  <a href={p.link}>{p.title}</a>, {p.authors},{" "}
                  {p.proceeding}
                </td>
              </tr>
            )
            )  )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Publication;
