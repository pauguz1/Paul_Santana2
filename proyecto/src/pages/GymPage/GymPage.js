import React, { useEffect, useState } from "react";
import '../../global.css';
import './GymPage.css';



const GymPage = ()=>{


    return (
        <section className="dev-page">
            <h1 class="title">Entrenamientos</h1>

            <div class="container-gym">
                <div>
                    <h2>Ejercicios</h2>
                    <div>
                        <img src="icons/iconDumbell.svg" alt=""/>
                        <span>Pesas</span>
                    </div>
                    <div>
                        <img src="icons/iconBody.svg" alt=""/>
                        <span>Calistenia</span>
                    </div>
                    <div>
                        <img src="icons/iconBox.svg" alt=""/>
                        <span>Box</span>
                    </div>

                </div>

                <div>
                    <h2>Medidas</h2>
                    <div>
                        <img src="icons/iconBody.svg" alt=""/>
                        <span>1.72cm</span>
                    </div>
                    <div>
                        <img src="icons/iconBascula.svg" alt=""/>
                        <span>65kg</span>
                    </div>

                </div>
            </div>
        <h1 class="title">PICS</h1>

        <div class='container-images'>
            <img src="fotos-gym/2018.png" alt="nikon" loading="lazy" />
            <img src="fotos-gym/2018-1.png" alt="nikon" loading="lazy" />
        </div>
        </section>
    );
};

export default GymPage;