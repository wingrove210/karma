import './css/SecondSection.css';
import Header from './Header';
import './css/fonts.css';
import founder from './media/26 1.png';
import founder_background from './media/Sun.png';

function SecondSection() {
  return (
    <section className="second-section">
        <Header />
         <div className="founder-block">
             <div className='founder-background-block'>
                <img src={founder_background} alt="" className="founder-background" />
             </div>
            <div className='founder-img-block'>
                <img src={founder} alt="" className="founder-image" />
            </div>
         </div>
         <div className="brands-text">
             <h1>MODEL</h1>
             <h2>KSON ALEX</h2>
         </div>
    </section>
  );
}

export default SecondSection;