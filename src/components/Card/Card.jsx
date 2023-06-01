// eslint-disable-next-line react/prop-types
const Card = ({location, rotate, clickCard}) => {

  return (
    <img src={location} alt="card" className={`cards__card ${rotate}` } onClick={clickCard}/>
  )
}

export default Card;