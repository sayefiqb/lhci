import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import News from './news';

const Home = () => {
  return (
    <div>
      <br />
      <div>
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={require("./lab1.jpg")}
                    alt="First slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={require("./lab3.jpg")}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={require("./lab4.jpg")}
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
      <div className="container">
        <br />
        <br />
        <div className="headline">
          <p className="lead">
            St. John's University's{" "}
            <strong>Laboratory for Human Computer Interaction </strong>(LHCI)
            was founded in November 2019 by Christoforos Christoforou. The
            mission of LHCI is to use principles of reverse “neuro”-engineering
            to characterize the cortical networks underlying perceptual and
            cognitive processes, such as rapid decision making, in the human
            brain. Our laboratory pursues both basic and applied neurosciences
            research projects.
          </p>
          <hr className="my-4" />
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
        <br />
        <br />
          <News />
          <hr className="my-4" />
        </div>
      </div>
    
  );
};

export default Home;
