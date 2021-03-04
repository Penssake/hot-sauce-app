import HotSauceItem from "./HotSauceItem";

const HotSauceList = ({ hotSauces }) => {
    return (
        <ul className="grid-container">
            {hotSauces.map(item => (
                <HotSauceItem item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default HotSauceList;