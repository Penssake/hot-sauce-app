import cholulaImg from "../assets/bottles/cholula.png";
import elYucateco from "../assets/bottles/el-yucateco.png";
import louisiana from "../assets/bottles/louisiana.png";
import redHot from "../assets/bottles/red-hot.png";
import sriracha from "../assets/bottles/sriracha.png";
import tabasco from "../assets/bottles/tabasco.png";
import tapatio from "../assets/bottles/tapatio.png";
import texasPete from "../assets/bottles/texas-pete.png";

const HotSauceItem = ({ item }) => {
    const imgObj = {
        "cholulaImg": cholulaImg,
        "elYucateco": elYucateco,
        "louisiana": louisiana,
        "redHot": redHot,
        "sriracha": sriracha,
        "tabasco": tabasco,
        "tapatio": tapatio,
        "texasPete": texasPete

    }
    return (
        <li>
            <img src={imgObj[item.img.src]} alt={item.img.alt} />
            <h2>{item.title}</h2>
        </li >
    )
}

export default HotSauceItem;
// alt for accessibility