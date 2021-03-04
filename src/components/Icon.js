import close from "../assets/icons/close.png";
import arrow from "../assets/icons/arrow.png";

const Icon = ({ srcKey, alt, classKey }) => {
    const iconObj = {
        "close": close,
        "arrow": arrow
    }
    return (
        <img src={iconObj[srcKey]} alt={alt} className={classKey} />
    )
}

export default Icon;