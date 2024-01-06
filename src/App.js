import './App.css';
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import MintNft from './components/MintNft';
import Team from './components/Team';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import BackToTop from './common/BackToTop';
function App() {
  return ( 
    <>
      <Hero />
      <AboutUs />
      <MintNft />
      <Team />
      <FAQs />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;