import React from 'react';
import Main from './Main';

class App extends React.Component {
  render() {
    console.log('running app ...');
    return (
      <div>
        <Main />
      </div>
  );
  }
}

export default App;