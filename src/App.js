import { useState } from "react";

import Header from './components/Header';
import HotSauceList from "./components/HotSauceList";

import data from './data/hotsauces.json';
import "./styles/main.scss";

const App = () => {
  const DATA = data;
  const [header] = useState(DATA.header);
  const [hotSauces, setNewHotSauce] = useState(DATA.list);

  console.log(hotSauces)

  return (
    <div className="hot-sauce-app">
      <Header text={header.text} icon={header.icon} />
      <HotSauceList hotSauces={hotSauces} />
    </div>
  );
}

export default App;
