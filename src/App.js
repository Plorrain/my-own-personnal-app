import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';


function App() {
return (
    <Fragment>
      <h1 style={{color: "white"}}>Philippine Lorrain</h1>
      <PageHeader />
      <CardFlip />
      <footer style={{backgroundColor: "#C1A3A3", color: "#F3C5C5"}}>
        Made with 🖤 by Philippine Lorrain
      </footer>
    </Fragment>
  );
}

export default App;
