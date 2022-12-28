import React, { Fragment } from "react";

import NavBar from "./components/UI/NavBar";
import FallingArrow from "./components/UI/FallingArrow";
import Card from "./components/UI/Card";
import Footer from "./components/UI/Footer";
import brunctimePicture from "./images/Brunchtime-picture.png";
// import profilePicture from "./images/profile-picture.png";

const App = (props) => {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <div className="name-banner">
          <h1>Hello! I'm Philippine</h1>
          {/* For english translation */}
          {/* <div className="translation-button">
            <p>Eng</p>
          </div> */}
        </div>

        {/* image exists only in CSS/if it breaks will need to come back here in <img /> */}
        <div className="image-profile">
          {/* line below: best practice I think but photo does not respond to its css class */}
          {/* <img src={profilePicture} alt="Philippine Lorrain" /> */}
        </div>
        <div className="introduction">
          <p>I am a frontend developer.</p>
        </div>
        <FallingArrow />
        <div className="title">Project(s)</div>
        <Card>
          <a href="https://www.brunchtime.live/" target="blank">
            <img src={brunctimePicture} alt="Brunchtime" />
          </a>
          <div className="content">
              Test application to find brunch spots with the shortest line. This
              is a team project, built as a final project within a coding
              bootcamp training.
          </div>
        </Card>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
