import React from 'react';
import Form from './components/Form';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="form-container">
          <Form />
        </div>
        <div className="card-container" />
      </>
    );
  }
}

export default App;
