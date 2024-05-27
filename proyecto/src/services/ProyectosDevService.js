//regresamos la lista de tecnologias de desarollo que conozco

const obtenerProyectosDev = ()=>{
    return [
        {
            'titulo':'MotApp',
            'icon':'MotApp.svg',
            'imagen':'MotApp.jpg',
            'info':'2018 aplicación móvil android para el control y monitoreo de motocicletas.',
            'tecnologia':['Java','Dialowflow']
        },
        {
            'titulo':'PSG',
            'icon':'PSG.ico',
            'imagen':'PSG.png',
            'info':'2019 Sistema para monitorear la ubicación de los vehículos y además realizar la gestión de los pedidos.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'IcePol',
            'icon':'PolIce.ico',
            'imagen':'PolIce.png',
            'info':'2019 Sistema de punto de venta para la gestión de ventas e inventario de productos.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'Sistema de punto de venta',
            'icon':'java.svg',
            'imagen':'PolIce.png',
            'info':'2021 Sistema de punto de venta para la gestión de ventas e inventario de productos.',
            'tecnologia':['Java','Derby']
        },
        {
            'titulo':'Sistema de control de peliculas',
            'icon':'java.svg',
            'imagen':'controlPeliculas.png',
            'info':'2021 Sistema para la gestión de la renta de peliculas.',
            'tecnologia':['Java','JDBC','GlassFish','MySQL','GIT']
        },
        {
            'titulo':'Finanzas X',
            'icon':'finanzasX.png',
            'imagen':'finanzasX1.png',
            'info':'2021 Sistema para la gestión de las finanzas de startups para el laboratorio de software libre labsol en el cual se puede realizar el balance de un proyecto así como el gestionar el gasto por los recursos de capital humano.',
            'tecnologia':['Django','Figma','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'Iplant',
            'icon':'Iplant1.png',
            'imagen':'Iplant.png',
            'info':'2021 Sistema para el registro de pruebas de los experimentos realizados en invernaderos.',
            'tecnologia':['Firebase','HTML','CSS','JS']
        },
        {
            'titulo':'Invernadero CZ',
            'icon':'czPRO.svg',
            'imagen':'czPRO.png',
            'info':'2022 Sistema de monitoreo y control de invernaderos ',
            'tecnologia':['Django','Figma','PWA','API','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'Planeación Docente',
            'icon':'planeacionDocente.svg',
            'imagen':'planeacionDocente.png',
            'info':'2022 Sistema para la gestión y colaboración de las planeaciones de los docentes.',
            'tecnologia':['Django','Figma','API','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'FishGroup',
            'icon':'fishGroup.png',
            'imagen':'fishGroup1.png',
            'info':'2023 Sistema para la gestión de pruebas y control de invernaderos de pescados.',
            'tecnologia':['Django','Figma','PWA','SPA','API','HTML','CSS','JS','GIT']
        },
        {
            'titulo':'Inifap',
            'icon':'inifap.svg',
            'imagen':'inifap.png',
            'info':'2023 Sistema para la gestión de los gastos de proyectos del inifap.',
            'tecnologia':['Django','TDD','Figma','PWA','SPA','NGINX','API','HTML','CSS','JS','Docker','PostgreSQL','GIT']
        },
        {
            'titulo':'Lecheria Cienega Jerez',
            'icon':'lecheriaCienegaJerez.svg',
            'imagen':'lecheriaCienegaJerez.png',
            'info':'2024 Sistema para la gestión de compras y ventas de productos, análisis del comportamiento de compras y ventas de los usuarios y predicción de las mismas.',
            'tecnologia':['Django','TDD','Figma','PWA','SPA','NGINX','API','HTML','CSS','JS','Docker','PostgreSQL','GIT']
        }
    ]
};

export default obtenerProyectosDev;