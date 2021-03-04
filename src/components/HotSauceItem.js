import Icon from "./Icon";
import Image from "./Image";

const HotSauceItem = ({ item }) => {
    return (
        <li className={item.id && 'grid-container__item grid-container__item--' + item.id}>
            <Icon srcKey="close" />
            <Image srcKey={item.img.src} alt={item.img.alt} />
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <Icon srcKey="arrow" />
        </li >
    )
}

export default HotSauceItem;
