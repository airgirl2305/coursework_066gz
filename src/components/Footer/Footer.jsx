import './Footer.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright &copy; {currentYear} <b>FRCronic.</b> All rights reserved.
      </p>
      <p>
        Made by <FontAwesomeIcon icon={faGithubAlt} />
        <a href="https://github.com/airgirl2305" target="_blank">
          @airgirl2305
        </a>
      </p>
    </footer>
  );
};
