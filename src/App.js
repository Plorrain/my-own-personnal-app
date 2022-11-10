import React, { Fragment } from 'react';

import PageHeader from './components/UI/PageHeader';
import CardFlip from './components/UI/CardFlip';

function App() {
return (
    <Fragment>
      <PageHeader />
      <CardFlip />
      <CardFlip />
    </Fragment>
  );
}

export default App;
