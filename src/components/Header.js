import Image from "./Image";
import Button from "./Button";
import { useLocation } from 'react-router-dom';

const usePathname = () => {
    const location = useLocation();
    if (location.pathname !== "/") return true;
    else return false;
}

const Header = ({ text, icon }) => {
    let viewHomeButton = usePathname();

    return (
        <header className="hot-sauce-header">
            <div className="hot-sauce-header__left">
                <Image srcKey={icon.src} alt={icon.alt} classKey="hot-sauce-header__image" />
                <h1>{text}</h1>
            </div>
            {viewHomeButton && <Button href="/" icon="home" classKey="hot-sauce-header__home" link={true} />}
        </header>
    )
}

export default Header;