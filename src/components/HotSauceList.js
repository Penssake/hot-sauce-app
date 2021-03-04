import HotSauceItem from "./HotSauceItem";

const HotSauceList = ({ hotSauces }) => {
    return (
        <ul>
            {hotSauces.map(item => (
                <HotSauceItem item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default HotSauceList;