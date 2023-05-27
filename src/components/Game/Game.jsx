import damakaro from '../../assets/damakaro.jpg';
import damapik from '../../assets/damapik.jpg';
import damakier from '../../assets/damakier.jpg';

const Game = () => {
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
        <button className="buttons__btn">Start</button>
        <button className="buttons__btn">Reset</button>
      </div>
    </>
  );
};

export default Game;
