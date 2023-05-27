const Hamburger = () => {

  const classes = ['rotate', 'hidden', 'reverse-rotate'] 

  const click = () => {
    const btnItems = document.querySelectorAll(".hamburger__item");
    btnItems.forEach ((item, i) => item.classList.toggle(classes[i]))
  }

  return (
    <button className="hamburger" onClick={click}>
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
    </button>

  );
};


export default Hamburger;