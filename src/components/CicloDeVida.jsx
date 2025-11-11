import {useState, useEffect}  from 'react'

export default function CicloDeVida () {
    const [data, setData] = useState (null);

useEffect (()=> {
    console.log ('Componente montado')
    //Simulacion de llamada a una API
    const timer = setTimeout(()=> {
        setData ('Datos cargados');

    }, 1000 );

        //Funcion de limpieza
        return() =>{
            clearTimeout (timer);
            console.log ("Componente desmontado!")
        }
}),[]}

