import './App.css';
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import MintNft from './components/MintNft';
import Team from './components/Team';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import BackToTop from './common/BackToTop';
import Roadmap from './components/Roadmap';
function App() {
  return ( 
    <>
      <Hero />
      <AboutUs />
      <Roadmap/>
      <MintNft />
      <Team />
      <FAQs />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;