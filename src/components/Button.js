import { A } from "hookrouter";
import Icon from "./Icon";

const Button = ({ click, type, href, icon, classKey }) => {
    const Link = type === 'link';

    return (
        <>
            {!Link ?
                <button className={classKey} onClick={() => click()}><Icon srcKey={icon} /></button>
                :
                <A classKey={classKey} href={href}><Icon srcKey={icon} /></A>
            }
        </>
    )
}

export default Button;