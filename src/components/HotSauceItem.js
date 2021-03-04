import Image from "./Image";
import Button from './Button';

const HotSauceItem = ({ item, onDeleteSauce }) => {
    return (
        <li className="grid-container__item">
            <Button click={onDeleteSauce} id={item.id} icon="close" classKey="grid-container__close" />
            <div className="grid-container__product-stage">
                <Image srcKey={item.img.src} alt={item.img.alt} classKey="grid-container__product-image" />
                <div className="grid-container__product-stage--backlight"></div>
            </div>
            <div className="grid-container__content">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
            </div>
            <div className="grid-container__footer">
                <Button href="/product/" id={item.id} icon="arrow" classKey="grid-container__arrow" link={true} />
            </div>
        </li >
    )
}

export default HotSauceItem;
