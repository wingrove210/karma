import './App.css';
import './css/fonts.css';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import SectionFour from './Section4';
import FooterSection from './FooterSection';
import Catalog from './Catalog';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <SectionFour />
      <FooterSection />
      {/* <Catalog /> */}
    </>
  );
}

export default App;
