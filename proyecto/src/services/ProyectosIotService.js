//regresamos la lista de tecnologias de desarollo que conozco

const obtenerProyectosIot = ()=>{
    return [
        {
            'titulo':'PolHome',
            'icon':'PolHome.ico',
            'imagen':'PolHome.jpg',
            'info':'2019 sistema para el control y monitoreo de un sistema de iluminación el cual está alimentado por energía solar en el cual podemos ver la temperatura del exterior y la carga de las baterías de litio.',
            'tecnologia':['C#','Firebase','ESP8266','Arduino']
        },
        {
            'titulo':'PolSafe',
            'icon':'PolSafe.ico',
            'imagen':'PolSafe.jpg',
            'info':'2019 Sistema de alarma el cual envía los datos de las detecciones a una base de datos en tiempo real la cual puede ser consultada mediante una app móvil.',
            'tecnologia':['C#','Firebase','ESP8266','Arduino']
        },
        {
            'titulo':'PolSerial',
            'icon':'PolSerial2.ico',
            'imagen':'PolSerial.png',
            'info':'2019 Sistema para la comunicación de microcontroladores y una interfaz de software con la cual se puede realizar la configuración de una interfaz mediante el micro para con ello poder presentar datos en la interfaz o utilizar los botones para ejecutar acciones en el microcontrolador.',
            'tecnologia':['C#','Arduino']
        },
        {
            'titulo':'Plantas Labsol',
            'icon':'PlantasLabsol.ico',
            'imagen':'PlantasLabsol.png',
            'info':'2019 Sistema para el monitoreo en tiempo real de invernaderos del laboratorio de software libre labsol.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'Domótica',
            'icon':'Domotica.ico',
            'imagen':'Domotica.png',
            'info':'2019 Sistema para el control y monitoreo de las lámparas de una casa la cual es alimentada por energía solar en la cual podemos ver la carga restante de las baterías y la temperatura, además de configurar para que las luces se enciendan automáticamente si es de noche.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'PolFit',
            'icon':'PolFit.ico',
            'imagen':'PolFit.png',
            'info':'2019 Sistema para el monitoreo del conteo de ejercicios en tiempo real mediante una app de escritorio en la cual se pruebe visualizar el conteo de los ejercicios realizados por un usuario.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'MedikTrue',
            'icon':'MedikTrue.ico',
            'imagen':'MedikTrue.png',
            'info':'2020 Sistema de control en tiempo real de servomotores mediante una aplicación de escritorio en la cual se elige si se quiere controlar o ser controlado un servomotor.',
            'tecnologia':['C#','Firebase']
        },
        {
            'titulo':'Dron',
            'icon':'dron.ico',
            'imagen':'dron.png',
            'info':'2020 Sistema para controlar los motores de un dron mediante una aplicación de escritorio y el puerto serial.',
            'tecnologia':['C#','Puerto Serial']
        },
        {
            'titulo':'PolBot',
            'icon':'polBot1.png',
            'imagen':'polBot.png',
            'info':'2020 Sistema para configurar una serie de movimientos que luego serán ejecutados mediante un brazo robótico de 5 grados de libertad utilizando el puerto serial.',
            'tecnologia':['C#','Puerto Serial']
        },
        {
            'titulo':'Respirador',
            'icon':'respirador.ico',
            'imagen':'respirador.png',
            'info':'2020 Sistema de monitoreo y administración del uso de los respiradores en tiempo real.',
            'tecnologia':['C#','Firebase','Puerto Serial']
        },
        {
            'titulo':'Monitoreo Temperatura y Humedad',
            'icon':'MonitoreoTempHum.png',
            'imagen':'MonitoreoTempHum1.png',
            'info':'2020 Sistema de monitoreo y administración del uso de los respiradores en tiempo real.',
            'tecnologia':['C#','Firebase','ESP-8266']
        },
        {
            'titulo':'Invernadero PRO',
            'icon':'InvernaderoPro.ico',
            'imagen':'InvernaderoPro.png',
            'info':'2021 Sistema para el control de los horarios de riego de invernaderos en tiempo real.',
            'tecnologia':['C#','Firebase','ESP-8266']
        },
        {
            'titulo':'Control Lámpara',
            'icon':'lampara.png',
            'imagen':'sistemaControlLampara.png',
            'info':'2023 Sistema de control en tiempo real de una lámpara utilizando microservicios y mi propia metodología de diseño e implementación de arquitectura de microservicios en sistemas IOT.',
            'tecnologia':['Nodejs','NGINX','Docker','HTML','CSS','JS','ESP-8266']
        },
        {
            'titulo':'Estación Meteorológica',
            'icon':'estacion.png',
            'imagen':'sistemaMonitoreo.png',
            'info':'2023 Sistema de monitoreo en tiempo real, monitoreo histórico y predicción de la temperatura y humedad del ambiente utilizando microservicios y mi propia metodología de diseño e implementación de arquitectura de microservicios en sistemas IOT.',
            'tecnologia':['Nodejs','Django','TensorFlow','API','NGINX','Docker','HTML','CSS','JS','ESP-8266']
        }
    ]
};

export default obtenerProyectosIot;