import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';
import './App.css';

function App() {
return (
    <Fragment>
      <div className='body'>
        <h1>Philippine Lorrain</h1>
        <PageHeader />
        <CardFlip />
      </div>
      <footer>
        Made with 💝 by Philippine Lorrain
      </footer>
    </Fragment>
  );
}

export default App;
