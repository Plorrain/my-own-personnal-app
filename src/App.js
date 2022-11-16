import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';

function App() {
return (
    <Fragment>
      <div className='name-banner'>
        <h1 className='my-name'>Philippine Lorrain</h1>
      </div>
      <img src={require('./images/profile-picture.jpeg').default} alt='Philippine Lorrain' />
      <PageHeader />
        <h1>Projects</h1>
        <p>Brunchtime</p>
        <h1>About me</h1>
        <p>I used to work in retail/customer service. I decided to change careers
          and ended up learning code in a bootcamp.
          I am learning react at the moment
          (and i used it for this website 😯)
        </p>
      <CardFlip />
      <footer style={{backgroundColor: "#C1A3A3", color: "#F3C5C5"}}>
        Made with 🖤 by yours truly
      </footer>
    </Fragment>
  );
}

export default App;
