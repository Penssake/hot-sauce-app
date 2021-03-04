import { A } from "hookrouter"

const Button = ({ click, type, href }) => {
    const Link = type === 'link';

    return (
        <>
            {!Link ? <button onClick={() => click()}></button> : <A href="/"></A>}
        </>
    )
}

export default Button