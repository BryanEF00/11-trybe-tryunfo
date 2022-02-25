import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineLink } from 'react-icons/ai';

import './Form.css';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <>
        <div className="form-title">Adicionar nova carta</div>
        <form>
          <label htmlFor="cardName">
            Nome
            <br />
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              id="cardName"
              className="card-name-input"
              autoComplete="off"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <br />
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="description"
              className="card-description-input"
              rows="5"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label
            htmlFor="attr-1"
            className="attr-container"
          >
            <span>Ataque</span>
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              id="attr-1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label
            htmlFor="attr-2"
            className="attr-container"
          >
            <span>Defesa</span>
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              id="attr-2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label
            htmlFor="attr-3"
            className="attr-container"
          >
            <span>Total</span>
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              id="attr-3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label
            htmlFor="image"
            className="card-image-container"
          >
            <span>
              Imagem
            </span>
            <AiOutlineLink className="icon-image" />
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
            />

          </label>

          <label htmlFor="rarity">
            Raridade
            <br />
            <select
              data-testid="rare-input"
              name="cardRare"
              id="rarity"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
