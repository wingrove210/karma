import './css/FooterSection.css';
import './css/fonts.css';
import donate_base from  './media/Rectangle 45.png';
import donate_image from './media/Rectangle 46.png';
import under_donate from './media/Rectangle 4 (2).png'
import bid_main from './media/VVV 1.png';
import telegram_sign from './media/Telegram.png'
import vk_sign from './media/VK.png'
import instagram_sign from './media/Instagram.png'

function FooterSection() {
  return (
    <section className="footer-section">
        <div className="footer-header">
            <h1>KARMA</h1>
        </div>
        <div className='donate-section'>
            <div className="donate-block">
                <img src={donate_base} alt="" className="donate-base" />
                <img src={donate_image} alt="" className="donate-image" />
                <div className="donate-text-block">
                  <p className="upper-grid-donate">DONATE</p>
                  <p className="upper-grid-donate">T IME</p>
                  <p className="middle-grid-donate">МИНИМАЛЬНОЕ ПОЖЕРТВОВАНИЕ</p>
                  <p className="middle-grid-donate-2">КОНЕЦ СБОРА</p>
                  <p className="lower-grid-donate">0.010 BTC</p>
                  <p className="lower-grid-donate">21 november</p>
                </div>
            </div>
            <div className="under-donate-block">
                <img src={under_donate} alt="" />
                <div className="under-donate-text">
                   <h1>210.000 ₽ <br /> <span>УЖЕ ПОЖЕРТВОВАЛИ</span></h1>
                   <h1>11k+<br /> <span>At the aution</span></h1>
                   <h1>3k+<br /> <span>Arts</span></h1>
                </div>
            </div>
        </div>
        <div className='sidebar-block'>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h1>KARMA</h1>
                </div>
                <div className="sidebar-content">
                    <ul className="sidebar-list">
                        <li>CATALOG</li>
                        <li>INFO</li>
                        <li>COMPANY</li>
                        <li>LOCATED</li>
                    </ul>
                </div>
                <div className="bid-block">
                     <img src={bid_main} alt="" />
                     <div className="bid-text">
                         <p>CREATIVE KARMA DESIGN///EST 2023</p>
                         <p>VISUAL BY.OU</p>
                     </div>
                </div>
            </div>
        </div>
        <div className="social-footer">
            <img src={telegram_sign} alt="" />
            <img src={vk_sign} alt="" />
            <img src={instagram_sign} alt="" />
        </div>
    </section>
  );
}

export default FooterSection;