import Icon from "./Icon";
import Image from "./Image";

const HotSauceItem = ({ item }) => {
    return (
        <li className="grid-container__item">
            <Icon srcKey="close" classKey="grid-container__close" />
            <Image srcKey={item.img.src} alt={item.img.alt} classKey="grid-container__product-image" />
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <Icon srcKey="arrow" classKey="grid-container__arrow" />
        </li >
    )
}

export default HotSauceItem;
