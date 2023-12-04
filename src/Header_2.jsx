import './css/Header_2.css'
import './css/fonts.css';
import btn_header from './media/Rectangle 40 (1).png';
import btn_enter from './media/Rectangle 41.png';

function Header_2() {
  return (
    <>
       <section className="header-section">
           <div className="header-buttons">
               <div className='btn-register-block'>
                <img src={btn_header} alt="" className="btn-register" />
                 <p>РЕГИСТРАЦИЯ</p>
               </div>
               <div className='btn-enter-block'>
                <img src={btn_enter} alt="" className="btn-enter" />
                <p>ВХОД</p>
               </div>
           </div>
       </section>
    </>
  );
}

export default Header_2;