import logo from "../../../public/logo.svg";
// import { NavBar } from "../NavBar/NavBar"
import styles from './Header.module.css'
export const Header = () => {
  return (
    <header>

      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="site logo"/>
        <p><b>FRCronic.</b></p>
        <h1 >Главная</h1>
      </div>
    </header>
  );
}
