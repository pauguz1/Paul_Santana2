import React, { useState } from 'react';
import '../../global.css';
import './NavbarBottom.css';
import { useLocation, useNavigate } from 'react-router-dom';

// Ruta de los iconos del panel
const iconDev = 'icons/iconDev.svg';
const iconIot = 'icons/iconRay.svg';
const iconMe = 'icons/iconMe.svg';
const iconFoto = 'icons/iconCamera.svg';
const iconGym = 'icons/iconGym.svg';

function NavbarBottom() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    //bandera para el estado del modal de Me (mostrado, oculto)
    const [banderaMe, setBanderaMe] = useState(true);

    const toggleClassMe = () =>{
        setBanderaMe(!banderaMe);
    };

    const handleClick = (index, path) => {
        setSelectedIndex(index);
        navigate(path);
    };

    return (
        <section className="navbar-bottom">

            <div className={`navbar-bottom-item ${selectedIndex === 0 ? 'selected' : ''} ${path === '/dev' ? 'selected' : ''}`} onClick={() => handleClick(0, '/dev')} >
                <img src={iconDev} alt="Dev" />
                <span>Dev</span>
            </div>

            <div className={`navbar-bottom-item ${selectedIndex === 1 ? 'selected' : ''} ${path === '/iot' ? 'selected' : ''}`} onClick={() => handleClick(1, '/iot')} >
                <img src={iconIot} alt="IoT" />
                <span>IoT</span>
            </div>
            
            <div className="navbar-bottom-item"  onClick={toggleClassMe} >
                <img src={iconMe} alt="Me" />
                <span>Me</span>
                <div className={`me ${banderaMe?'display-none':''} `} >
                    <h2>Hola soy un creador de tecnologia fuera de lo común</h2>
                    <h3>estudie ing en robotica y mecatronica e ing de software</h3>
                    <h3>ademas de multiples  disciplinas más de manera autodidacta</h3>
                    <h3>las cuales me han llevado a La interrogante</h3>
                    <h3>y que mas sigue...</h3>
                    <div class="contact-me">
                        <h1>Contactame</h1>
                        <h3>Solo si vamos a hacer algo increible</h3>
                    </div>
                    <div class="contact-social">
                        <img onclick="window.open('https://www.facebook.com/share/GjUaHxUJRTySsxhs/?mibextid=qi2Omg', '_blank');" src="icons/iconFacebook.svg" alt="icono facebook"/>
                        <img onclick="window.open('https://www.instagram.com/paul_s4ntana/?hl=es-la', '_blank');" src="icons/iconInstagram.svg" alt="icono instagram"/>
                        <img onclick="window.open('https://www.tiktok.com/@paul_santana?_t=8mQxz8bga73&amp;_r=1', '_blank');" src="icons/iconTiktok.svg" alt="icono tik tok"/>
                        <img onclick="window.open('https://x.com/PaulSan03224341?t=NPx7NWQDuFI4JSKrBNhJRA&amp;s=08', '_blank');" src="icons/iconX.svg" alt="icon X"/>
                        <img onclick="window.open('https://mx.linkedin.com/in/paul-santana-5678341a6', '_blank');" src="icons/iconLinkeding.svg" alt="icon linkeding"/>
                        <img onclick="window.open('https://github.com/pauguz1', '_blank');" src="icons/iconGithub.svg" alt="icon github" />
                    </div>
                </div>
            </div>

            <div className={`navbar-bottom-item ${selectedIndex === 3 ? 'selected' : ''} ${path === '/foto' ? 'selected' : ''}`} onClick={() => handleClick(3, '/foto')} >
                <img src={iconFoto} alt="Foto" />
                <span>Foto</span>
            </div>

            <div className={`navbar-bottom-item ${selectedIndex === 4 ? 'selected' : ''} ${path === '/gym' ? 'selected' : ''}`} onClick={() => handleClick(4, '/gym')} >
                <img src={iconGym} alt="Gym" />
                <span>Gym</span>
            </div>

        </section>
    );
}

export default NavbarBottom;
