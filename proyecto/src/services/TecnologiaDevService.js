//regresamos la lista de tecnologias de desarollo que conozco

const obtenerSkillsDev = ()=>{
    return [
        {
            'titulo':'c',
            'icon':'c.svg',
            'info':'Lo utilizo cuando resuelvo problemas de programación competitiva por su alto rendimiento'
        },
        {
            'titulo':'c++',
            'icon':'cMas.svg',
            'info':'Lo utilizo cuando programo microcontroladores y problemas donde necesite programación orientada a objetos'
        },
        {
            'titulo':'C#',
            'icon':'cSharp.svg',
            'info': 'Lo utilizo para desarrollar programas de escritorio y algunas aplicaciones móviles'
        },
        {
            'titulo':'Java',
            'icon':'java.svg',
            'info':'Lo utilizo para desarrollar programas de escritorio o scripts para realizar ciertas tareas que necesito'
        },
        {
            'titulo':'JavaScript',
            'icon':'js.svg',
            'info':'Lo utilizo para aplicaciones web del lado del cliente para mejorar la experiencia de usuario'
        },
        {
            'titulo':'Python',
            'icon':'python.svg',
            'info':'Lo utilizo para aplicaciones web de lado del backend APIS o scripts en los que necesito realizar ciertas tareas'
        },
    ]
};

export default obtenerSkillsDev;