import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AiOutlineLink, AiFillCheckCircle } from 'react-icons/ai';
import { MdError } from 'react-icons/md';

import './Form.css';

class Form extends Component {
  emptyField = (input) => (!!input);

  validAttr = (input) => {
    const max = 90;
    return input >= 0 && input <= max;
  };

  validSum = (input) => {
    const total = 210;

    return input <= total && input >= 0;
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    const totalPoints = 210;

    const sum = totalPoints - (
      parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10));

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

          <span className="error">
            {this.emptyField(cardName)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}
          </span>

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

          <span className="error">
            {this.emptyField(cardDescription)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}
          </span>

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

          <span className="error">
            {this.validAttr(cardAttr1)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}
          </span>

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

          <span className="error">
            {this.validAttr(cardAttr2)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}

          </span>

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

          <span className="error">
            {this.validAttr(cardAttr3)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}

          </span>

          <div className="total-points">
            {`Pontos restantes = ${sum}`}
          </div>

          <span className="error-total">
            {this.validSum(sum)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}
          </span>

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

          <span className="error">
            {this.emptyField(cardImage)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}
          </span>

          <label
            htmlFor="rarity"
            className="card-rare-input"
          >
            <span>
              Raridade
              <i className="arrow-down" />
            </span>
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

          <span className="error">
            {this.emptyField(cardRare)
              ? <AiFillCheckCircle className="check-icon" />
              : <MdError className="error-icon" />}

          </span>

          <label
            htmlFor="checkbox"
            className="card-trunfo-input"
          >
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
            className="save-btn"
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
