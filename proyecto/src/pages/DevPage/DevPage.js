import React, { useEffect, useState } from "react";
import '../../global.css';
import './DevPage.css';

//importamos los servicios para obtener la lista de skills
import obtenerSkillsDev from "../../services/TecnologiaDevService";
import obtenerProyectosDev from "../../services/ProyectosDevService";

const DevPage = ()=>{

    const [skill, setSkill] = useState([]);
    const [proyecto, setProyecto] = useState([]);

    useEffect(()=>{
        const skill = obtenerSkillsDev();
        const proyecto = obtenerProyectosDev();

        setSkill(skill);
        setProyecto(proyecto)
    },[]);

    return (
        <section className="dev-page">
            <h1 className="title">Tecnologias que conozco</h1>
            <div id="contenedor-skills">
                {skill.map(item=>(
                    <div className="skill">
                        <div>
                            <img src={`/icons/${item.icon}`}  />
                            <span>{item.titulo}</span>
                        </div>
                        <p>
                            {item.info}
                        </p>
                    </div>
                ))
                }
            </div>
            <div id="contenedor-proyects">
                {proyecto.map(item=>(
                    <div className="proyect">
                        <div>
                            <img src={`/proyectos/${item.icon}`} alt={item.titulo} />
                            <span>{item.titulo}</span>
                        </div>
                        <p>{item.info}</p>
                        <img src={`/proyectos/${item.imagen}`} alt={item.titulo} />
                        <h2>Tecnologias:</h2>
                        {item.tecnologias}
                    </div>
                ))
                }
            </div>
            
        </section>
    );
};

export default DevPage;