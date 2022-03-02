import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CardDeck.css';

class CardDeck extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <div className="card-deck">
        <div className="card-bg">
          <div
            data-testid="name-card"
            className="card-name"
          >
            { cardName }

          </div>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            className="card-image"
          />
          <div
            data-testid="description-card"
            className="card-description"
          >
            {cardDescription}

          </div>
          <div className="card-attr">
            <div
              className="attr-name1"
            >
              ATAQUE ...............................

            </div>
            <div
              data-testid="attr1-card"
              className="attr-value1"
            >
              { cardAttr1 }

            </div>
            <div
              className="attr-name2"
            >
              DEFESA ...............................

            </div>
            <div
              data-testid="attr2-card"
              className="attr-value2"
            >
              { cardAttr2 }

            </div>
            <div
              className="attr-name3"
            >
              TOTAL ..................................

            </div>
            <div
              data-testid="attr3-card"
              className="attr-value3"
            >
              { cardAttr3 }

            </div>
            <div
              data-testid="rare-card"
              className="card-rare"
            >
              { cardRare }
            </div>
            {
              cardTrunfo
              && <div data-testid="trunfo-card" className="card-trunfo">Super Trunfo</div>
            }
          </div>
        </div>
      </div>
    );
  }
}

CardDeck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default CardDeck;
