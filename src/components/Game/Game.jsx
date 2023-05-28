import damakaro from '../../assets/damakaro.jpg';
import damapik from '../../assets/damapik.jpg';
import damakier from '../../assets/damakier.jpg';
import back from '../../assets/back.jpg';
import { useState } from 'react';

const Game = () => {
  const [btnStart, btnReset] = document.querySelectorAll('.buttons__btn');
  console.log(btnStart);

  const [btnS, setStart] = useState(btnStart);

  const start = () => {
    const cards = document.querySelectorAll('.cards__card');

    btnS.disabled = true;
    btnReset.disabled = false;

    cards.forEach((card) => {
      card.setAttribute('src', `${back}`);

      // card.classList.toggle('cardReverseRotate');
    });
  };
  const reset = () => {
    const images = [`${damakaro}`, `${damapik}`, `${damakier}`];
    const cards = document.querySelectorAll('.cards__card');
    const [btnStart, btnReset] = document.querySelectorAll('.buttons__btn');
    btnStart.disabled = false;
    btnReset.disabled = true;

    cards.forEach((card, i) => {
      card.classList.add('cardRotate');
      card.setAttribute('src', images[i]);
    });
  };

  return (
    <>
      <div className="results">
        <form className="form" action="/" method="post">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Wyniki:</legend>
            <div className="form__field">
              <label className="form__field-item" htmlFor="number_attempts">
                Ilość prób:{' '}
              </label>
              <input
                className="form__field-item"
                id="number_attempts"
                name="number_attempts"
              />
            </div>

            <div className="form__field">
              <label className="form__field-item" htmlFor="number_hits">
                Ilość trafień:{' '}
              </label>
              <input
                className="form__field-item"
                id="number_hits"
                name="number_hits"
              />
            </div>

            <input className="form__submit" type="submit" value="Wyślij" />
          </fieldset>
        </form>
      </div>

      <div className="cards">
        <img className="cards__card" src={damakaro} alt="dama karo" />
        <img className="cards__card" src={damapik} alt="dama pik" />
        <img className="cards__card" src={damakier} alt="dama kier" />
      </div>

      <div className="buttons">
        <button className="buttons__btn" onClick={start}>
          Start
        </button>
        <button className="buttons__btn" onClick={reset} disabled>
          Reset
        </button>
      </div>
    </>
  );
};

export default Game;
