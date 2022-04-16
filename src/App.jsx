import './App.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Admission from './components/Admission/Admission';
import About from './components/About/About';
import News from './components/News/News';
import Calendar from './components/Calendar/Calendar';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Info />
      <News />
      {/* <Admission /> */}
      <About />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
