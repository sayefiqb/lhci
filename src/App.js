import React from "react";
import NavBar from "./components/navbar";
import "./App.css";
import People from './components/people';
import Publication from './components/publication';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/home';
import NotFound from './components/notFound';
import Detail from './components/detail';
import AreaOfInterest from './components/areaOfInterest'
import Projects from './components/projects';
import Project_Detail from './components/project_detail';
import InterestPage from './components/interestPage';
import BottomNav from './components/bottomNav';




function App() {
  return (
    <main>
     
      <NavBar />
      <div className="container content">
      <Switch>
        <Route path="/areaOfInterest" exact component={AreaOfInterest}></Route>
        <Route path="/areaOfInterest/:id" exact component={InterestPage}></Route>
        <Route path="/people/:id" component={Detail}></Route>
        <Route path="/people" component={People}></Route>
        <Route path="/publication" component={Publication}></Route>
        <Route path="/projects/:id" component={Project_Detail}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/" exact component={Home}></Route>
        <Redirect to="/not-found" />
      </Switch>
      </div>   
      <BottomNav />
    </main>
  );
}

export default App;