import { useState } from "react";
import AddSauce from '../components/AddSauce';
import HotSauceList from "../components/HotSauceList";

import data from '../data/hotsauces.json';

const Home = () => {
    const DATA = data.list;
    const [hotSauces, setHotSauce] = useState(DATA);
  
    // delete sauce
    const deleteSauce = (id) => {
        setHotSauce(hotSauces.filter((sauce) => sauce.id !== id))
    }

    // add sauce
    const addNewSauce = (sauce) => {
        const id = Math.floor(Math.random() * 10000 + 1);

        const newSauce = {
            id: id,
            title: sauce.title,
            subTitle: sauce.subTitle,
            description: sauce.description,
            img: sauce.img
        }

        setHotSauce([newSauce, ...hotSauces])
    }
    return (
        <>
            <AddSauce onAddSauce={addNewSauce} />
            <HotSauceList hotSauces={hotSauces} onDeleteSauce={deleteSauce} />
        </>
    )
}

export default Home;