import logo from '../../assets/logo.jpg'

const Header = () => {


  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <h1 className="header__heading">Gra w trzy karty</h1>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item"><a href="/" className="menu__link">Strona główna</a></li>
          <li className="menu__item"><a href="#" className="menu__link">Jak grać</a></li>
          <li className="menu__item"><a href="#" className="menu__link">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
