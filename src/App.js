import Header from './components/Header';

import data from './data/hotsauces.json';

const App = () => {
  const DATA = data;

  return (
    <div className="hot-sauce-app">
      <Header text={DATA.header.text} icon={DATA.header.icon} />
    </div>
  );
}

export default App;
