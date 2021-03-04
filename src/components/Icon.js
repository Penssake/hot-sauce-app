import close from "../assets/icons/close.png";
import arrow from "../assets/icons/arrow.png";

const Icon = ({ srcKey, alt }) => {
    const iconObj = {
        "close": close,
        "arrow": arrow
    }
    return (
        <img src={iconObj[srcKey]} alt={alt} />
    )
}

export default Icon;