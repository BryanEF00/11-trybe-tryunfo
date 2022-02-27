import React from 'react';
import Form from './components/Form';

import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardsDeck: [],
      hasTrunfo: false,
    };
  }

  formsValidation = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    let invalidForms = false;

    const emptyField = [cardName, cardDescription, cardImage, cardRare]
      .some((value) => !value);

    const maxAttr = 90;

    const invalidAttr = [
      cardAttr1 <= maxAttr && cardAttr1 >= 0,
      cardAttr2 <= maxAttr && cardAttr2 >= 0,
      cardAttr3 <= maxAttr && cardAttr3 >= 0,
    ].some((value) => !value);

    const totalPoints = 210;

    const invalidAttrSum = (
      parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10)
    ) > totalPoints;

    if (emptyField || invalidAttr || invalidAttrSum) {
      invalidForms = true;
    }
    this.setState({ isSaveButtonDisabled: invalidForms });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.formsValidation);
  }

  onSaveButtonClick = (event) => {
    const newDeck = this.state;

    const { cardsDeck } = this.state;

    event.preventDefault();

    this.setState((previousState) => ({
      cardsDeck: [...previousState.cardsDeck, newDeck],
    }));

    const trunfoValidation = cardsDeck.some((value) => !value.cardTrunfo);

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: trunfoValidation,
      isSaveButtonDisabled: true });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo } = this.state;

    return (
      <>
        <div className="form-container">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            hasTrunfo={ hasTrunfo }
          />
        </div>
        <div className="card-container">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </>
    );
  }
}

export default App;
