import HotSauceItem from "./HotSauceItem";

const HotSauceList = ({ hotSauces, onDeleteSauce }) => {
    return (
        <ul className="grid-container">
            {hotSauces.map(item => (
                <HotSauceItem item={item} key={item.id} onDeleteSauce={onDeleteSauce} />
            ))}
        </ul>
    )
}

export default HotSauceList;