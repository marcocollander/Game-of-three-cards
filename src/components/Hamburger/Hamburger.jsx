const Hamburger = () => {
  const click = () => {
    const classes = ['rotate', 'hidden', 'reverse-rotate', 'hidden', 'opacity'];
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    let elements = document.querySelectorAll('.hamburger__item');
    elements = Array.from(elements);
    elements.push(menu);
    elements.push(body);
    elements.forEach((elem, i) => elem.classList.toggle(classes[i]));
  };

  return (
    <button className="hamburger" onClick={click}>
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
    </button>
  );
};

export default Hamburger;
