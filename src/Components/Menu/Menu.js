import React, { useState } from 'react';
import './Menu.css';
import logo from '../../Components/Images/logo_saturno.png';
import house from '../../Components/Images/house 1.png';
import books from '../../Components/Images/book (2) 1.png';
import certificate from '../../Components/Images/certificate (1) 1.png';
import user from '../../Components/Images/user (1) 1.png';
import premium from '../../Components/Images/premium (1) 1.png';
import journey from '../../Components/Images/journey 1.png';
import study from '../../Components/Images/case-study 1.png';
import logo_2 from '../../Components/Images/logo_saturno_branco 2.png';


const Menu = () => {

    const [isMenuHovered, setIsMenuHovered] = useState(false);

    const delayEnter = 500;

    const delayLeave = 10;

    const handleMenuMouseEnter = () => {
      setTimeout(() => {
        setIsMenuHovered(true);
      }, delayEnter);
    }
  
    const handleMenuMouseLeave = () => {
      setTimeout(() => {
        setIsMenuHovered(false);
      }, delayLeave);
    }

    return (
        <div className="menu" onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}>
            <div className='logo-menu'>
                <h1 className={`logo-menu-text ${isMenuHovered ? 'show' : 'hide'}`} alt="logo">SATURN</h1>
                <img src={logo} className='logo-img'  alt='logo'/>
            </div>
            <div className={`links-menu ${isMenuHovered ? 'show' : 'hide'}`}>
                <div className='menu-ext'>
                    <img src={house} className='menu-img house' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`} alt="logo">Página Inicial</h2>
                </div>
                <div className='menu-ext'>
                    <img src={books} className='menu-img books' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`}>Meus Cursos</h2>
                </div>
                <div className='menu-ext'>
                    <img src={certificate} className='menu-img certificate' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`}>Meus Certificados</h2>
                </div>
                <div className='menu-ext'>
                    <img src={user} className='menu-img user' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`}>Meu Perfil</h2>
                </div>
                <div className='menu-ext'>
                    <img src={premium} className='menu-img premium' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`}>Seja Premium</h2>
                </div>
                <div className='menu-ext'>
                    <img src={journey} className='menu-img journey' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`}>Sua jornada</h2>
                </div>
                <div className='menu-ext'>
                    <img src={study} className='menu-img study' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`}>Todos os Cursos</h2>
                </div>
                <div className='menu-ext'>
                    <img src={logo_2} className='menu-img logo-2' alt='logo'/>
                    <h2 className={`menu-links ${isMenuHovered ? 'show' : 'hide'}`}>Sobre a Saturno</h2>
                </div>
            </div>
        </div>
    )
}
export default Menu;