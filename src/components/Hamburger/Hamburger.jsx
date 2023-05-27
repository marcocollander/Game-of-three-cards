const Hamburger = () => {
  const btn = document.querySelector(".nav__hamburger");
const btnItems = document.querySelectorAll(".nav__hamburger-item");

btn.addEventListener("click", () => {
  // btn.classList.toggle("circle");
  btnItems[0].classList.toggle("rotate");
  btnItems[1].classList.toggle("hidden");
  btnItems[2].classList.toggle("reverse-rotate");
});

  return (
    <button className="hamburger">
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
    </button>

  );
};


export default Hamburger;