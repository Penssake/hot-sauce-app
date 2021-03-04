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

import cholulaImg2 from "../assets/labels/cholula.png";
import elYucateco2 from "../assets/labels/el-yucateco.png";
import louisiana2 from "../assets/labels/louisiana.png";
import redHot2 from "../assets/labels/red-hot.png";
import sriracha2 from "../assets/labels/sriracha.png";
import tabasco2 from "../assets/labels/tabasco.png";
import tapatio2 from "../assets/labels/tapatio.png";
import texasPete2 from "../assets/labels/texas-pete.png";
import Cholula2 from "../assets/labels/cholula.png";

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
        "cholula": Cholula,
        "cholulaImg2": cholulaImg2,
        "elYucateco2": elYucateco2,
        "louisiana2": louisiana2,
        "redHot2": redHot2,
        "sriracha2": sriracha2,
        "tabasco2": tabasco2,
        "tapatio2": tapatio2,
        "texasPete2": texasPete2,
        "cholula2": Cholula2
    }
    return (
        <img src={iconObj[srcKey]} alt={alt} className={classKey} />
    )
}

export default Image;