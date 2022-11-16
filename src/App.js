import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';


function App() {
return (
    <Fragment>
      <div className='name-banner'>
        <h1 className='my-name'>Philippine Lorrain</h1>
      </div>
      <PageHeader />
      <CardFlip />
      <footer style={{backgroundColor: "#C1A3A3", color: "#F3C5C5"}}>
        Made with 🖤 by yours truly
      </footer>
    </Fragment>
  );
}

export default App;
