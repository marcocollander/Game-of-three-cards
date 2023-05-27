import damakaro from '../../assets/damakaro.jpg';
import damapik from '../../assets/damapik.jpg';
import damakier from '../../assets/damakier.jpg';

const Game = () => {
  <div className="game">
    <img className="game__card" src={damakaro} alt="dama karo" />
    <img className="game__card" src={damapik} alt="dama pik" />
    <img className="game__card" src={damakier} alt="dama kier" />
  </div>;
};

export default Game;
