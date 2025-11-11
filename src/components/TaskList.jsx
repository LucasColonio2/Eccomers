import { useState } from "react";

export default function TaskList (){
    const [taks,setTask] = useState ([
        {id: 1, name: 'Studiar React'},
        {id: 2, name: 'Ir al cine'},
        {id: 3, name: 'Reunion de trabajo'},
    ]);
    return(
        <>
        <h1>Lista de tareas</h1>
        {taks.map(taks => <p key= {taks.id}>{taks.name}</p>)}
        </>
    )
}
