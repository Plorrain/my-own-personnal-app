import React, { Fragment } from "react";

import NavBar from "./components/UI/NavBar";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <div className="name-banner">
          <h1>Hello! I'm Philippine</h1>
        </div>

        {/* For english translation */}
        {/* <div className="translation-button">
            <p>Eng</p>
          </div> */}

        {/* image exists only in CSS/if it breaks will need to come back here in <img /> */}
        <div className="image-background"></div>
        {/* <a href="https://www.brunchtime.live/" target="blank">
            Brunchtime
          </a> */}
        <div className="content">
          <p>I am a frontend developer.</p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
