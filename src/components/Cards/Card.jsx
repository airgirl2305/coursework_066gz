import './Card.sass'
import {Link, NavLink} from "react-router-dom";
export const Card = ({ id, title, content }) => {
      return (
        <NavLink>
          <Link to='/' className="contentCard" id={id}>
          <img src={content} alt="картинка" className="contentCard__image" />
          <p className="contentCard">{title}</p></Link>
        </NavLink>
      )
}
