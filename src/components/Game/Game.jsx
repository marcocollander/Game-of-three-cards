import Card from "../Card/Card.jsx";
import Form from "../Form/Form.jsx";
import Button from "../Button/Button.jsx";
import damaKaro from '../../assets/damakaro.jpg'
import damaPik from '../../assets/damapik.jpg'
import damaKier from '../../assets/damakier.jpg'
import back from '../../assets/back.jpg'
import {useState} from "react";

const Game = () => {
  const [disabledStart, setDisabledStart] = useState(false)
  const [disabledReset, setDisabledReset] = useState(true)
  const [rotate, setRotate] = useState('')
  const [cards, setCards] = useState([damaKaro, damaPik, damaKier])
  const [flag, setFlag] = useState(false)


  const clickStart = () => {
    setDisabledStart(true);
    setDisabledReset(false);
    setCards([back, back, back])
    setRotate('cardRotate')
    setFlag(true);
  };
  const clickReset = () => {
    setDisabledStart(false);
    setDisabledReset(true);
    setCards([damaKaro, damaPik, damaKier])
    setRotate('cardReverseRotate');
  };

  const calculateIndex = () => {
    const i = Math.floor(Math.random() * 3);
    console.log(i)
    const numbers = [0, 1, 2];
    let index = numbers.find((number) => number === i);
    numbers.splice(index);
    let j, k = 0
    switch (numbers.length) {
      case 0:
        j = 1;
        k = 2;
        break;
      case 1:
        j = 0;
        k = 2;
        break;
      case 2:
        j = 1;
        k = 0
    }
    return [i, j, k];
  }
  const clickCardOne = () => {
    let [i] = calculateIndex();
    setDisabledStart(false)
    setFlag(true)
    console.log(flag);
    const images = [damaKaro, damaPik, damaKier]
    setCards([images[i], back, back])
    if (flag) {
      setRotate('cardReverseRotate')
    } else {
      setRotate('cardRotate')
    }
  }
  const clickCardTwo = () => {
    let [j]  = calculateIndex()
    setDisabledStart(false)
    setFlag(false)
    console.log(flag);
    const images = [damaKaro, damaPik, damaKier]
    setCards([back, images[j], back])
    if (flag) {
      setRotate('cardReverseRotate')
      setFlag(false)
    } else {
      setRotate('cardRotate')
      setFlag(false)
    }
  }
  const clickCardThree = () => {
    let [k]  = calculateIndex()
    setDisabledStart(false)
    setFlag(false)
    console.log(flag);
    const images = [damaKaro, damaPik, damaKier]
    setCards([back, back, images[k]])
    if (flag) {
      setRotate('cardReverseRotate')
      setFlag(false)
    } else {
      setRotate('cardRotate')
      setFlag(false)
    }
  }

  return (
    <>
      <div className="results">
        <Form/>
        <div className="cards">
          {/*{cards.map((card, i) => <Card  key={i} location={card} rotate={rotate} clickCard={clickCard} />)}*/}
          <Card location={cards[0]} rotate={rotate} clickCard={clickCardOne}/>
          <Card location={cards[1]} rotate={rotate} clickCard={clickCardTwo}/>
          <Card location={cards[2]} rotate={rotate} clickCard={clickCardThree}/>
        </div>
      </div>
      <div className="buttons">
        <Button clik={clickStart} name={'Start'} disabled={disabledStart}/>
        <Button clik={clickReset} name={'Reset'} disabled={disabledReset}/>
      </div>
    </>
  );
};

export default Game;
