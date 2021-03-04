import redPepper from "../assets/icons/cholula.png";
import greenPepper from "../assets/icons/el-yucateco.png";
import yellowPepper from "../assets/icons/louisiana.png";
import close from "./assets/icons/close.png";
import arrow from "./assets/icons/arrow.png";

const Icon = ({ src, alt }) => {
    const iconObj = {
        "redPepper": redPepper,
        "greenPepper": greenPepper,
        "yellowPepper": yellowPepper,
        "close": close,
        "arrow": arrow
    }
    return (
        <img src={iconObj[src]} alt={alt} />
    )
}

export default Icon;