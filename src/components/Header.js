import Image from "./Image";

const Header = ({ text, icon }) => {
    return (
        <header className="hot-sauce-header">
            <Image srcKey={icon.src} alt={icon.alt} classKey="hot-sauce-header__image" />
            <h1>{text}</h1>
        </header>
    )
}

export default Header;