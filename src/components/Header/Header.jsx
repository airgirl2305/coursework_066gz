import logo from "../../../public/logo.svg";
// import { NavBar } from "../NavBar/NavBar"
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>

      <div className={styles.container}>
        <NavLink to={"/"}><img src={logo} className={styles.logo} alt="site logo"/>
        <h1><b>FRCronic.</b></h1>
        < >Главная</></NavLink>
      </div>
    </header>
  );
}
