import redPepper from "../assets/icons/pepper-red.png";
import greenPepper from "../assets/icons/pepper-green.png";
import yellowPepper from "../assets/icons/pepper-yellow.png";
import cholulaImg from "../assets/bottles/cholula.png";
import elYucateco from "../assets/bottles/el-yucateco.png";
import louisiana from "../assets/bottles/louisiana.png";
import redHot from "../assets/bottles/red-hot.png";
import sriracha from "../assets/bottles/sriracha.png";
import tabasco from "../assets/bottles/tabasco.png";
import tapatio from "../assets/bottles/tapatio.png";
import texasPete from "../assets/bottles/texas-pete.png";
import Cholula from "../assets/bottles/cholula.png";

const Image = ({ srcKey, alt, classKey }) => {
    const iconObj = {
        "redPepper": redPepper,
        "greenPepper": greenPepper,
        "yellowPepper": yellowPepper,
        "cholulaImg": cholulaImg,
        "elYucateco": elYucateco,
        "louisiana": louisiana,
        "redHot": redHot,
        "sriracha": sriracha,
        "tabasco": tabasco,
        "tapatio": tapatio,
        "texasPete": texasPete,
        "cholula": Cholula
    }
    return (
        <img src={iconObj[srcKey]} alt={alt} className={classKey} />
    )
}

export default Image;