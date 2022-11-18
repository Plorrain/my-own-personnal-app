import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';

function App() {
return (
    <Fragment>
{/* lets make scrolling pretty */}

      {/* different colors for name banner */}
        <div className='name-banner'>
          <h1 className='my-name'>Philippine Lorrain</h1>
        </div>
      <div className='container'>
        {/* image not working */}
        <img src={require('./images/profile-picture.jpeg').default} alt='Philippine Lorrain' />

        <PageHeader />
          <h1>Projects</h1>
        {/* brunchtime in a card component maybe? */}
        <div>
          <a href='https://www.brunchtime.live/' target='blank'>Brunchtime</a>
          <ul>
            <li>Teamwork project while at Le Wagon</li>
          </ul>
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
      </div>
      <footer style={{backgroundColor: "#C1A3A3", color: "#F3C5C5"}}>
        Made with 🖤 by yours truly
      </footer>
    </Fragment>
  );
}

export default App;
