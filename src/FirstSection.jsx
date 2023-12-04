import './css/FirstSection.css'
import './css/fonts.css';
import Header from './Header';
import Header_2 from './Header_2';
import eye from './media/7x4. 1_pixian_ai.png'
import telegram_sign from './media/Telegram.png'
import vk_sign from './media/VK.png'
import instagram_sign from './media/Instagram.png'

function FirstSection() {
  return (
    <section className="upper-section">
        <Header_2 />
        <Header />
        <nav className="social-media">
            <div className="eye">
                <img src={eye} alt="" className="eye-img" />
                <p className="eye-text">KARMA</p>
            </div>
            <ul className="social-links">
                <li className="social-link"><img src={telegram_sign} alt="" className="telegram-sign" /></li>
                <li className="social-link"><img src={vk_sign} alt="" className="telegram-sign" /></li>
                <li className="social-link"><img src={instagram_sign} alt="" className="telegram-sign" /></li>
            </ul>
        </nav>
        <div className="karma-over-header">
            <div>
                <div className='line-header'>
                    <span></span>
                </div>
                <p>KARMA</p>
            </div>
        </div>
        <div className="karma-header">
            <h1>KARMA</h1>
        </div>
        <div className="under-header-block">
             <div className="under-header">TECH WEAR BY ALEX KSON</div>
        </div>
    </section>
  );
}

export default FirstSection;