import close from "../assets/icons/close.png";
import arrow from "../assets/icons/arrow.png";
import home from "../assets/icons/home.png";
import plus from "../assets/icons/plus.png";

const Icon = ({ srcKey, alt, classKey }) => {
    const iconObj = {
        "close": close,
        "arrow": arrow,
        "home": home,
        "plus": plus
    }
    return (
        <img src={iconObj[srcKey]} alt={alt} className={classKey} />
    )
}

export default Icon;