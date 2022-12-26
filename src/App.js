import React, { Fragment } from "react";

import NavBar from "./components/UI/NavBar";
import FallingArrow from "./components/UI/FallingArrow";
import Footer from "./components/UI/Footer";

const App = () => {
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
        <div className="image-background"></div>
        <div className="content">
          <p>I am a frontend developer.</p>
          <FallingArrow />
        </div>
        <div className='title'>Projects</div>
      </div>
      <Footer />
      {/* <a href="https://www.brunchtime.live/" target="blank">
          Brunchtime
        </a> */}
    </Fragment>
  );
};

export default App;
