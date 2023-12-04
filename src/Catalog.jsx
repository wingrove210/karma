import './css/catalog.css';
import './css/fonts.css';
import Header from './Header';
import jacket from './media/IMG_8557 1.png'
import Header_2 from './Header_2';
import bullets from './media/Group 5.png';
import arrows from './media/chevron.left.png';

function Catalog() {
  return (
    <section className="catalog-section">
      <Header_2 />
       <Header />
        <div className="catalog-block">
            <div className="catalog-text-left">
                <h2>HOODIE</h2>
                <h1>RICK OWENS</h1>
                <p>DRKSDW SS23 HOODIE DESIGN BY KSNON </p>
            </div>
            <img src={jacket} alt="" />
            <div className="catalog-text-right">
                <h1>ЦЕНА</h1>
                <h2>50.000 P</h2>
                <button>ДОБАВИТЬ В КОРЗИНУ</button>
            </div>
        </div>
        <div className="slider-controls">
           <img src={arrows} alt="" className="arrow-btn-1" />
           <img src={bullets} alt="" className="bullets" />
           <img src={arrows} alt="" className="arrow-btn" />
        </div>
    </section>
  );
}

export default Catalog;