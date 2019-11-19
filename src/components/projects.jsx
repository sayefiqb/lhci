import React, { Component } from "react";
import Project from './project';
import { getProjects } from './../resources/sampleData';

class Projects extends Component {
  state = { projects: getProjects() }
  render() { 
    return (
      this.state.projects.map(
        item => <Project key={item.id} myprop={item}/>
      )
    )
  }
}
 
export default Projects;



