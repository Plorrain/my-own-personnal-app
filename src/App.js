import React, { Fragment } from "react";

import NavBar from "./components/UI/NavBar";
import FallingArrow from "./components/UI/FallingArrow";
import Card from "./components/UI/Card";
// import Footer from "./components/UI/Footer";

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
        <div className="image-profile"></div>
        <div className="content">
          <p>I am a frontend developer.</p>
        </div>
        <FallingArrow />
        <div className="title">Project(s)</div>
        <Card className="image-brunchtime" />
      </div>
      {/* <Footer /> */}
      {/* <a href="https://www.brunchtime.live/" target="blank">
          Brunchtime
        </a> */}
    </Fragment>
  );
};

export default App;
