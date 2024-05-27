//regresamos la lista de tecnologias de desarollo que conozco

const obtenerSkillsIot = ()=>{
    return [
        {
            'titulo':'Arduino',
            'icon':'arduino.png',
            'info':'Utilizó el firmware de arduino para programar múltiples tipos de microcontroladores debido a su gran cantidad de librerías y comunidad existente.'
        },
        {
            'titulo':'Atmega 328P',
            'icon':'micro.png',
            'info':'Este microcontrolador lo utilizo mucho para cuando estoy realizando pruebas de código y necesito correr rápidamente las pruebas del sistema o hacer cosas rápido.'
        },
        {
            'titulo':'ESP-8266',
            'icon':'micro.png',
            'info':'Este microcontrolador lo utilizó para la mayor cantidad de proyectos por su gran versatilidad y bajo coste y su alto poder de cómputo ya que si uno programa adecuadamente no es necesario micros más potentes.'
        },
        {
            'titulo':'ESP-32',
            'icon':'micro.png',
            'info':'Este microcontrolador lo utilizo cuando necesito realizar 2 tareas a la par ya que cuenta con 2 hilos y con ello puedo realizar 2 tareas individuales y con ello obtener un mayor rendimiento en cada tarea.'
        }
    ]
};

export default obtenerSkillsIot;