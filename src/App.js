import React from 'react';
import Form from './components/Form';

import './App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="form-container">
          <Form />
        </div>
        <div className="card-container">
          <Card
            cardRare="muito raro"
            cardTrunfo="true"
          />
        </div>
      </>
    );
  }
}

export default App;
