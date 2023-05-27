const Menu = () => {
  return (
    <>
      <nav className="menu hidden">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="/" className="menu__link">
              Strona główna
            </a>
          </li>

          <li className="menu__item">
            <a href="#" className="menu__link">
              Jak grać
            </a>
          </li>

          <li className="menu__item">
            <a href="#" className="menu__link">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
