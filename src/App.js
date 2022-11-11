import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';


function App() {
return (
    <Fragment>
      <h1>Philippine Lorrain</h1>
      <PageHeader />
      <CardFlip />
      <footer>
        Made with 💙 by Philippine Lorrain
      </footer>
    </Fragment>
  );
}

export default App;
