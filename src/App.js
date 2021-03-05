import { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductView from './pages/ProductView';

import data from './data/hotsauces.json';
import "./styles/main.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom"

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
          subtitle: sauce.subtitle,
          description: sauce.description,
          img: sauce.img
      }

      setHotSauce([newSauce, ...hotSauces])
  }

  return (
    <BrowserRouter>
      <div className="hot-sauce-app">
        <Header text={header.text} icon={header.icon} />
        <Switch>
          <Route path='/' exact render={() => <Home addNewSauce={addNewSauce} hotSauces={hotSauces} deleteSauce={deleteSauce} />} />
          <Route path='/product/:id' render={(props) => <ProductView id={props.match.params.id} data={hotSauces} />} />
        </Switch>
        <Footer text={footer.text} number={footer.number} />
      </div>
    </BrowserRouter>
  );
}

export default App;
