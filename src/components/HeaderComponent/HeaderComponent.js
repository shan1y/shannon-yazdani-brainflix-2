import userIcon from "../../assets/Images/Mohan-muruge.jpg";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
import "./HeaderComponent.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>
        <div className="header__search--mobile">
          <input
            type="text"
            className="search__input--mobile"
            placeholder="Search"
          />

          <div className="header__avatar-container--mobile">
            <img className="header__avatar--mobile" src={userIcon} />
          </div>
        </div>
        <Link className="upload-link--mobile" to="/upload">
          <button className="header__button--mobile">Upload</button>
        </Link>

        <div className="header__search--desktop">
          <div className="search__container--desktop">
            <input
              type="text"
              className="search__input--desktop"
              placeholder="Search"
            />
          </div>
          <Link className="upload-link--desktop" to="/upload">
            <button className="header__button--desktop">Upload</button>
          </Link>
          <div className="header__avatar-container--desktop">
            <img className="header__avatar--desktop" src={userIcon} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
