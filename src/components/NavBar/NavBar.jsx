import styles from "./NavBar.module.css"
import logo from "../../../public/logo.svg"
export const NavBar = () => {
  return (
    <>
      <img src={logo} className={styles.logo} alt="site logo" />
    </>
  );
}
