import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../global.css'
import './Navbar.css';


//ruta icon reloj
const iconReloj = 'icons/iconReloj.svg'


const Navbar = ()=>{

    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    //para mostrar el index
    const mostrarIndex = ()=>{
        navigate('/');
    };

    useEffect(() => {
        const mostrarStatusReloj = () => {
            const hora = new Date();
    
            if (hora >= horario(5, 0) && hora <= horario(7, 0)) {
                setStatus('Entrenando🦍');
            } else if (hora >= horario(7, 1) && hora <= horario(8, 0)) {
                setStatus('Alistandome🫡');
            } else if (hora >= horario(8, 1) && hora <= horario(9, 0)) {
                setStatus('Transportandome🛵');
            } else if (hora >= horario(9, 1) && hora <= horario(10, 0)) {
                setStatus('Desayunando🐷');
            } else if (hora >= horario(10, 1) && hora <= horario(13, 30)) {
                setStatus('Trabajando⚡');
            } else if (hora >= horario(13, 31) && hora <= horario(14, 0)) {
                setStatus('Comiendo🐷');
            } else if (hora >= horario(14, 1) && hora <= horario(18, 0)) {
                setStatus('Trabajando⚡');
            } else if (hora >= horario(18, 1) && hora <= horario(19, 0)) {
                setStatus('Transportandome🛵');
            } else if (hora >= horario(19, 1) && hora <= horario(20, 0)) {
                setStatus('Comiendo🐷');
            } else if (hora >= horario(20, 1) && hora <= horario(21, 0)) {
                setStatus('Pensando🧠');
            } else if (hora >= horario(21, 1) && hora <= horario(21, 30)) {
                setStatus('Alistandome para dormir🍃');
            } else {
                setStatus('Durmiendo😴');
            }
        };
        // Mostrar el status al inicio del programa
        mostrarStatusReloj();
        // Mostrar el status cada minuto (60000 ms)
        const intervalId = setInterval(mostrarStatusReloj, 60000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []); // El arreglo vacío [] asegura que el efecto se ejecute solo una vez

    

    // Método para obtener la fecha actual con la hora y minutos deseados
    const horario = (hora, minutos) => {
        const tiempo = new Date();
        tiempo.setHours(hora);
        tiempo.setMinutes(minutos);
        return tiempo;
    };

    return (
        <nav className="navbar">
            <span onClick={mostrarIndex}>Paul Santana</span>
            <div>
                <img src={iconReloj} alt='reloj' />
                <span>{status}</span>
            </div>
        </nav>
    );
};

export default Navbar;