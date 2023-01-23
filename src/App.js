import React, { Fragment } from "react";

import NavBar from "./components/UI/Navbar";
import FallingArrow from "./components/UI/FallingArrow";
import Card from "./components/UI/Card";
import Footer from "./components/UI/Footer";
import brunctimePicture from "./images/Brunchtime-picture.png";
import profilePicture from "./images/profile-picture.png";

const App = () => {
  return (
    // TWCss work in progress: needs bugfix
    // something done, not done or removed made the code not working
    // nothing broken, something is blocking
    // wgy is the footer so big? Why is everything stuck on the left side?

    <Fragment>
      <NavBar />
      {/* container 1 */}
      <div className="bg-lightPink grid grid-cols-1 items-center">
        <div>
          <h1 className="text-navy">Hello! I'm Philippine</h1>
        </div>

        {/* image exists only in CSS/if it breaks will need to come back here in <img /> */}
        <div>
          {/* line below: best practice I think but photo does not respond to its css class */}
          <img
            src={profilePicture}
            alt="Philippine Lorrain"
            className="object-none w-40 h-40 rounded-full custom-position bg-no-repeat"
          />
        </div>
        <div>
          <p className="font-hanken text-color-navy">I am a frontend developer.</p>
        </div>
      </div>
      {/* container 2 */}
      <div>
        <div>
          <div>
            <FallingArrow />
          </div>
        </div>
        <div className="font-hanken text-color-fuschia">Project(s)</div>
        <Card>
          <a href="https://www.brunchtime.live/" target="blank">
            <img src={brunctimePicture} alt="Brunchtime" />
          </a>
          <div className="font-hanken text-color-brown">
            Test application to find brunch spots with the shortest line. This
            is a team project, built as a final project within a coding bootcamp
            training.
          </div>
        </Card>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
