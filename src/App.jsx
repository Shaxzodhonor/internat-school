import './App.scss';

import { Switch, Route } from 'react-router';

import Header from './components/Header/Header';

// ICONS


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Switch>
        <Route path="/" component={Header}></Route>
      </Switch> */}
    </div>
  );
}

export default App;
