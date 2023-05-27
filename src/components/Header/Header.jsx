import logo from '../../assets/logo.jpg';

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <h1 className="header__heading">Gra w trzy karty</h1>
      </header>
    </>
  );
};

export default Header;
