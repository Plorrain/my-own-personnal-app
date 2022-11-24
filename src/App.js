import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';
import profilePicture from './images/profile-picture.png'

function App() {
return (
    <Fragment>
      <div className='container-full'>
        <div className='name-banner'>
          <h1>Philippine Lorrain</h1>
        </div>
      </div>
      <div className='container'>
        <img src={profilePicture} alt='Philippine Lorrain' />

        <PageHeader />
          <h1>Projects</h1>
        {/* brunchtime in a card component maybe? */}
        <div>
          <a href='https://www.brunchtime.live/' target='blank'>Brunchtime</a>
        </div>
        <div>
          <h2>Teamwork project while at Le Wagon</h2>
        </div>
        <h1>About me</h1>
        <div>
          <p>I used to work in retail/customer service. In 2022, decided to change careers
            and ended up learning code in a bootcamp and I loved the experience.
            I am currently learning react
            (and i used it for this website 😯)!
          </p>
        </div>
          {/* make a list of skills (on flipcard?) */}
        <CardFlip />
        <CardFlip />
      </div>
      <div className='container-full'>
        <footer>
          Made with 🖤 by yours truly
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
