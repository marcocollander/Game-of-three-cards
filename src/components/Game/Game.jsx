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

            <label htmlFor="number_attempts">Ilość prób: </label>
            <input id="number_attempts" name="number_attempts" />

            <label htmlFor="number_hits">Ilość trafień: </label>
            <input id="number_hits" name="number_hits" />
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
