import logoWhite from "../img/logo-white.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoWhite} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Nature</span>
          <span className="heading-primary--sub">is where you belong</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          Discover our tours
        </a>
        <a href="#about" className="btn btn--white btn--infinity btn--animated">
          About Us
        </a>
      </div>
    </header>
  );
}
