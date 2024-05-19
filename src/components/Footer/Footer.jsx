import styles from "./Footer.module.css";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        Copyright &copy; {currentYear} <b>FRCronic.</b> All rights reserved.
      </p>
      <p>Made by <a href="https://github.com/airgirl2305">@airgirl2305</a></p>
    </footer>
  );
};
