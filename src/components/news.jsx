import React, { Component } from 'react';

const News = () => {
    return (     <div className="news">
    <h1 id="news-heading" className="animated bounce">Latest news</h1>
    <div className="row">
      <div className="col-sm-4">
        <div
          id="card"
          className="card text-center"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">
              New Haptic Arm Places Robotics Within Easy Reach
            </h5>
            <p className="card-text">
              Imagine being able to build and use a robotic device without
              the need for expensive, specialist kit or skills. That is
              the vision that researchers have now turned into reality,
              creating a ...{" "}
              <a className="btn btn-primary" href="#">
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div
          id="card"
          className="card text-center"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">
              Artificial Networks Shed Light on Human Face Recognition
            </h5>
            <p className="card-text">
              Our brains are so primed to recognize faces - or to tell
              people apart - that we rarely even stop to think about it,
              but what happens in the brain when it engages in such
              recognition is still far from ...
              <a className="btn btn-primary" href="#">
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div
          id="card"
          className="card text-center"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">
              Flexible Robot Designed to 'Grow' Like a Plant
            </h5>
            <p className="card-text">
              Engineers have developed a robot designed to extend a
              chain-like appendage flexible enough to twist and turn in
              any necessary configuration, yet rigid enough to support
              heavy loads or apply torque to ...{" "}
              <a className="btn btn-primary" href="#">
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div> );
}
 
export default News;