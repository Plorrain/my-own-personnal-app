import React, { Fragment } from "react";

import NavBar from './components/UI/NavBar';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="container-full">
        <div className="name-banner">
          <h1>Hello! I'm Philippine</h1>
        </div>

        {/* For english translation */}

          {/* <div className="translation-button">
            <p>Eng</p>
          </div> */}

      </div>

      <div className="container">
        {/* image exists only in CSS/if it breaks will need to come back here in <img /> */}
        <div className="image-background"></div>
          {/* <a href="https://www.brunchtime.live/" target="blank">
            Brunchtime
          </a> */}
      </div>

      {/* conteent not centered in full screen */}

      <div className="temporary-content">
       <p>Work in progress...
       Stay tuned. More to come.</p>
      </div>
      <div className="container-full">
        <footer>Made with 🖤 by Philippine Lorrain</footer>
      </div>
    </Fragment>
  );
}

export default App;
