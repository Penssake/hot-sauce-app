import { useState } from "react";
import AddSauce from '../components/AddSauce';
import HotSauceList from "../components/HotSauceList";
import Icon from '../components/Icon';
import data from '../data/hotsauces.json';

const Home = () => {
    const DATA = data.list;
    const [hotSauces, setHotSauce] = useState(DATA);
    const [showAddForm, setShowAddForm] = useState(false);

    // delete sauce
    const deleteSauce = (id) => {
        setHotSauce(hotSauces.filter((sauce) => sauce.id !== id))
    }

    // add sauce
    const addNewSauce = (sauce) => {
        const id = Math.floor(Math.random() * 10000 + 1);
        console.log(sauce.subtitle)
        const newSauce = {
            id: id,
            title: sauce.title,
            subtitle: sauce.subtitle,
            description: sauce.description,
            img: sauce.img
        }

        setHotSauce([newSauce, ...hotSauces])
    }

    const showForm = () => {
        setShowAddForm(!showAddForm);
    }
    return (
        <div className="home-view">
            <div className="home-view__addSauce">
                <button onClick={showForm}>
                    <p>Add Sauce</p>
                    <Icon srcKey="plus" classKey={!showAddForm ? "home-view__plus" : "home-view__plus home-view__plus--rotate"} />
                </button>
            </div>
            {showAddForm && <AddSauce onAddSauce={addNewSauce} />}
            <HotSauceList hotSauces={hotSauces} onDeleteSauce={deleteSauce} />
        </div>
    )
}

export default Home;