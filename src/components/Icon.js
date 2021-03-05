import close from "../assets/icons/close.png";
import arrow from "../assets/icons/arrow.png";
import home from "../assets/icons/home.png";
import plus from "../assets/icons/plus.png";
import redPepper from "../assets/icons/pepper-red.png";

const Icon = ({ srcKey, alt, classKey }) => {
    const iconObj = {
        "close": close,
        "arrow": arrow,
        "home": home,
        "plus": plus,
        "redPepper": redPepper
    }
    return (
        <img src={iconObj[srcKey]} alt={alt} className={classKey} />
    )
}

export default Icon;