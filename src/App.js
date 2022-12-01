import React, { Fragment } from "react";

// import PageHeader from "./components/UI/PageHeader";
import CardFlip from "./components/UI/CardFlip";
// import profilePicture from "./images/profile-picture.png"; <-- needed if <img /> has to be added again

function App() {
  return (
    <Fragment>
      <div className="container-full">
        <div className="name-banner">
          <h1>Philippine Lorrain</h1>
          <div className="translation-button">
            <p>Eng</p>
          </div>
        </div>
      </div>
      <div className="container">
        {/* image exists only in CSS/if it breaks will need to come back here in <img /> */}
        <div className="image-background"></div>
        {/* <PageHeader /> */}
        <p>Projects</p>
        {/* brunchtime in a card component maybe? */}
        <div>
          <a href="https://www.brunchtime.live/" target="blank">
            Brunchtime
          </a>
        </div>
        <div>
          <h2>Teamwork project while at Le Wagon</h2>
        </div>
        <h1>About me</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            beatae, ab nostrum et excepturi aliquid reprehenderit architecto
            rerum voluptas culpa consequuntur. Earum voluptates non perferendis
            consequatur praesentium optio enim minima.
          </p>
        </div>
        {/* make a list of skills (on flipcard?) */}
        <CardFlip />
        <CardFlip />
      </div>
      <div className="container-full">
        <footer>Made with 🖤 by yours truly</footer>
      </div>
    </Fragment>
  );
}

export default App;
