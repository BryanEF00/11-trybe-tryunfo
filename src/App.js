import React from 'react';

import Form from './components/Form';
import Card from './components/Card';
import CardDeck from './components/CardDeck';

import './App.css';

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
      filterName: '',
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

  verifyTrunfo = () => {
    const { cardsDeck } = this.state;
    this.setState({
      hasTrunfo: cardsDeck.some((card) => card.cardTrunfo),
    });
  }

  onSaveButtonClick = (event) => {
    const newDeck = this.state;

    event.preventDefault();

    this.setState((previousState) => ({
      cardsDeck: [...previousState.cardsDeck, newDeck],
    }), () => this.verifyTrunfo());

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true });
  };

  removeCard = (cardName) => {
    const { cardsDeck } = this.state;

    this.setState({
      cardsDeck: cardsDeck.filter((card) => card.cardName !== cardName),
    }, () => this.verifyTrunfo());
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, cardsDeck, filterName } = this.state;

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
        <div className="deck-container">
          <h1>Todas as cartas</h1>
          <h2>Filtros de busca</h2>
          <div className="filter-container">
            <input
              data-testid="name-filter"
              className="filter-name"
              type="text"
              placeholder="Nome da carta"
              name="filterName"
              value={ filterName }
              onChange={ this.onInputChange }
            />
          </div>
          <div className="card-deck-container">
            {
              cardsDeck.filter((card) => card.cardName.includes(filterName))
                .map((card) => (
                  <div className="card-items" key={ card.cardName }>
                    <CardDeck
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescription }
                      cardImage={ card.cardImage }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardRare={ card.cardRare }
                      cardTrunfo={ card.cardTrunfo }
                    />
                    <button
                      data-testid="delete-button"
                      type="button"
                      onClick={ () => this.removeCard(card.cardName) }
                    >
                      Excluir
                    </button>
                  </div>
                ))
            }
          </div>
        </div>
      </>
    );
  }
}

export default App;
