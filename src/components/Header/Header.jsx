import logo from "../../../public/logo.svg";
import "./Header.sass";
import "../Button.sass";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
export const Header = (props) => {

  return (
    <header className="header">
      <div className="container header__wrapper">
        <div className="header__logo">
          <NavLink to={"/"}>
            <img src={logo} className="logo" alt="site logo" />
            {/* <h1>
              <b>FRCronic.</b>
            </h1> */}
          </NavLink>
        </div>
        <div className="header__add-content">
          <NavLink to={props.user ? '/add-content' : '/sign-in'}>
            <button>Добавить Новенькое</button>
          </NavLink>
        </div>
        <div className="header__favourites">
          <NavLink to="/favorite">
            <FontAwesomeIcon icon={faBookmark} />
          </NavLink>
        </div>
        <div className="header__themes">
          <div className="header__themes-change">
            <FontAwesomeIcon icon={faSun} />
            <input type="checkbox" id="toggleTheme" />
            <label htmlFor="toggleTheme"></label>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>

        <div className="header__auth">
          <ul>
            {props.user ? (
              <>
                <li>
                  <NavLink to={`/profile/${props.user.id}`}>
                    <span className="header__user-name">{props.user.username}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={props.users.key_signOut}>
                    Выйти
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/sign-up">Регистрация</NavLink>
                </li>
                <li>
                  <NavLink to="/sign-in">Войти</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
