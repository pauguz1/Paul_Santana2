import React, { useEffect, useState } from "react";
import '../../global.css';
import './FotoPage.css';



const FotoPage = ()=>{


    return (
        <section className="dev-page">
            <h1 class="title">Herramientas</h1>
            
            <div class="tools">
                <div>
                    <img src="icons/iconNikon.svg" alt="nikon"/>
                    <span>Camara Nikon D3200</span>
                </div>
                <div>
                    <img src="icons/iconLightroom.svg" alt="lightroom"/>
                    <span>lightroom</span>
                </div>
                <div>
                    <img src="icons/iconPhotoshop.svg" alt="photoshop"/>
                    <span>Photoshop</span>
                </div>
            </div>
            <h1 class="title">PICS</h1>
        
            <div class='container-images'>
                <img src="fotos/2022.png" alt="paul santana" loading="lazy"/>
                <img src="fotos/2022-1.png" alt="paul santana" loading="lazy"/>
            </div>
            
        </section>
    );
};

export default FotoPage;