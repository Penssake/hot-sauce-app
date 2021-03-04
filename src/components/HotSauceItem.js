import Icon from "./Icon";
import Image from "./Image";

const HotSauceItem = ({ item }) => {
    // const imgObj = {
    //     "cholulaImg": cholulaImg,
    //     "elYucateco": elYucateco,
    //     "louisiana": louisiana,
    //     "redHot": redHot,
    //     "sriracha": sriracha,
    //     "tabasco": tabasco,
    //     "tapatio": tapatio,
    //     "texasPete": texasPete

    // }
    return (
        <li>
            <Icon srcKey="close" />
            <Image srcKey={item.img.src} alt={item.img.alt} />
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <Icon srcKey="close" />
        </li >
    )
}

export default HotSauceItem;
