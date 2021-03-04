import { useState } from "react";
import { useRoutes } from "hookrouter";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductView from './pages/ProductView';

import data from './data/hotsauces.json';
import "./styles/main.scss";

const routes = {
  '/': () => <Home />,
  '/product/:id': ({ id }) => <ProductView id={id} />
}

const App = () => {
  const DATA = data;

  const [header] = useState(DATA.header);
  const [footer] = useState(DATA.footer);

  const match = useRoutes(routes)

  return (
    <div className="hot-sauce-app">
      <Header text={header.text} icon={header.icon} />
      {match}
      <Footer text={footer.text} number={footer.number} />
    </div>
  );
}

export default App;
