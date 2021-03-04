import { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import AddSauce from './components/AddSauce';
import HotSauceList from "./components/HotSauceList";

import data from './data/hotsauces.json';
import "./styles/main.scss";

const App = () => {
  const DATA = data;

  const [header] = useState(DATA.header);
  const [footer] = useState(DATA.footer);
  const [hotSauces, setHotSauce] = useState(DATA.list);

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
    <div className="hot-sauce-app">
      <Header text={header.text} icon={header.icon} />
      <AddSauce onAddSauce={addNewSauce} />
      <HotSauceList hotSauces={hotSauces} onDeleteSauce={deleteSauce} />
      <Footer text={footer.text} number={footer.number} />
    </div>
  );
}

export default App;
