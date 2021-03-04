import Icon from "./Icon";
import Image from "./Image";
// import Button from './Button';

const HotSauceItem = ({ item, onDeleteSauce }) => {
    return (
        <li className="grid-container__item">
            <button onClick={() => onDeleteSauce(item.id)} className="grid-container__close">
                <Icon srcKey="close" />
            </button>
            {/* <Button  /> */}
            <div className="grid-container__product-stage">
                <Image srcKey={item.img.src} alt={item.img.alt} classKey="grid-container__product-image" />
                <div className="grid-container__product-stage--backlight"></div>
            </div>
            <div className="grid-container__content">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
            </div>
            <div className="grid-container__footer">
                <Icon srcKey="arrow" classKey="grid-container__arrow" />
            </div>
        </li >
    )
}

export default HotSauceItem;

// TODO clean up component, make button component for clickable icons 
// remove border from button that is clicked