import { useState } from "react";
import AddSauce from '../components/AddSauce';
import HotSauceList from "../components/HotSauceList";
import Icon from '../components/Icon';

const Home = ({ addNewSauce, deleteSauce, hotSauces }) => {
    const [showAddForm, setShowAddForm] = useState(false);


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