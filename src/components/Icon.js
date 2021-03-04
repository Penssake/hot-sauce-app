import redPepper from "../assets/icons/pepper-red.png";
import greenPepper from "../assets/icons/pepper-green.png";
import yellowPepper from "../assets/icons/pepper-yellow.png";
import close from "../assets/icons/close.png";
import arrow from "../assets/icons/arrow.png";

const Icon = ({ srcKey, alt }) => {
    const iconObj = {
        "redPepper": redPepper,
        "greenPepper": greenPepper,
        "yellowPepper": yellowPepper,
        "close": close,
        "arrow": arrow
    }
    return (
        <img src={iconObj[srcKey]} alt={alt} />
    )
}

export default Icon;