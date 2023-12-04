import './css/Section4.css';
import './css/fonts.css';
import Header from './Header';
import darkeye from './media/Eye_Dark.png';
import girls_image from './media/girls.png';
import lines_image from './media/LinesImage.png'

function SectionFour() {
  return (
     <section className="section-four">
        <Header />
        <div className="lines-image-block">
            <img src={lines_image} alt="" className="lines-image" />
        </div>
        <div className="women-image-block">
            <img src={girls_image} alt="" className="women-image" />
        </div>
        <nav className="side-bar">
            <div className="eye-dark">
                <img src={darkeye} alt="" className="eye-dark-image" />
            </div>
            <div className="side-bar-text-block">
                <p>01</p>
                <div>
                    <span></span>
                </div>
            </div>
        </nav>
        <div className="sec-four-block-text">
            <h1>О БРЕНДЕ</h1>
            <p>ТРЕП СВЕГ ПРОСТО ГЕНГ ТРАП ШИТ ФИТ ХИТТРЕП СВЕГ ПРОСТО ГЕНГ ТРАП ШИТ ФИТ ХИТ ТРЕП СВЕГ ПРОСТО ГЕНГ ТРАП ШИТ ФИТ ХИТ ТРЕП СВЕГ ПРОСТО ГЕНГ ТРАП ШИТ ФИТ ХИТ ТРЕП СВЕГ ПРОСТО ГЕНГ ТРАП ШИТ ФИТ ХИТ</p>
        </div>
        <div className="site-domen-block">
            <p className="site-domen">KARMA.COM</p>
        </div>
        <div className="kimono-text-block">
            <p>КИМОНО KARMA WOMAN 2021</p>
            <div className="kimono-elem">
                <span></span>
            </div>
        </div>
     </section>
  );
}

export default SectionFour;