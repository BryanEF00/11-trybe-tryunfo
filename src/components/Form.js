import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <>
        <div className="title">Adicionar nova carta</div>
        <form>
          <label htmlFor="cardName">
            Nome
            <br />
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              id="cardName"
            />
          </label>

          <label htmlFor="description">
            Descrição
            <br />
            <textarea
              data-testid="description-input"
              name="description"
              id="description"
            />
          </label>

          <label htmlFor="attr-1">
            Ataque
            <input
              data-testid="attr1-input"
              type="number"
              name="attr-1"
              id="attr-1"
            />
          </label>

          <label htmlFor="attr-2">
            Defesa
            <input
              data-testid="attr2-input"
              type="number"
              name="attr-2"
              id="attr-2"
            />
          </label>

          <label htmlFor="attr-3">
            Total
            <input
              data-testid="attr3-input"
              type="number"
              name="attr-3"
              id="attr-3"
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="image"
              id="image"
            />
          </label>

          <label htmlFor="rarity">
            Raridade
            <select
              data-testid="rare-input"
              name="rarity"
              id="rarity"
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
            />
            Super Trunfo
          </label>
          <button
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

export default Form;
