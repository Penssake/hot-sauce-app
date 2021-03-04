import { Link } from "react-router-dom";
import Icon from "./Icon";

const Button = ({ click, href, icon, classKey, id }) => {
    const LinkType = href && true;
    const link = id ? `/product/${id}` : href;
    
    return (
        <div className={classKey}>
            {!LinkType ?
                <button onClick={id ? () => click(id) : click()}><Icon srcKey={icon} /></button>
                :
                <Link to={link}><Icon srcKey={icon} /></Link>
            }
        </div>
    )
}

export default Button;