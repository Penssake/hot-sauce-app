import { Link } from "react-router-dom";
import Icon from "./Icon";

const Button = ({ click, href, icon, classKey, id }) => {
    const LinkType = href && true;
    return (
        <div className={classKey}>
            {!LinkType ?
                <button onClick={() => click(id)}><Icon srcKey={icon} /></button>
                :
                <Link to={`/product/${id}`}><Icon srcKey={icon} /></Link>
            }
        </div>
    )
}

export default Button;