import './css/Header.css'
import './css/fonts.css';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import SectionFour from './Section4';
import FooterSection from './FooterSection';
import Catalog from './Catalog';
import {Routes, Route, Link} from 'react-router-dom'
import App from './App';

function Header() {
  return (
    <>
          <header className="header">
              <ul className="header-links">
                  <a href="/about" className="header-link">ABOUT</a>
                  <a href="/catalog" className="header-link">PRODUCT</a>
                  <a href="/contact"  className="header-link">CONTACT</a>
              </ul>
          </header>
    </>
  );
}

export default Header;