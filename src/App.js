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

  return (
    <BrowserRouter>
      <div className="hot-sauce-app">
        <Header text={header.text} icon={header.icon} />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' render={(props) => <ProductView id={props.match.params.id} data={DATA.list} />} />
        </Switch>
        <Footer text={footer.text} number={footer.number} />
      </div>
    </BrowserRouter>
  );
}

export default App;
