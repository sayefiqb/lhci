import React, { Component } from "react";
import Project from './project';
import { getProjects } from './../resources/sampleData';

class Projects extends Component {
  state = { projects: getProjects() }
  render() { 
    return (
      <div>
        <h3 id="publication-header"  className="animated bounce">Projects</h3>
      {this.state.projects.map(
        item => <Project key={item.id} myprop={item}/>
      )}
      </div>
    )
  }
}
 
export default Projects;



