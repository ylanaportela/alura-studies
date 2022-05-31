import React, { useState } from "react";
import Item from "./Item";
import style from './List.module.scss'

export default function List(){
    const [tarefas, setTarefas] = useState(
        [{
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }]
    )
    return(
        <aside className={style.listaTarefas}>

            <h2 onClick={()=>{
                setTarefas([...tarefas,{tarefa: "Estudar Estado", tempo: "05:00"}])
            }} >Estudos do dia</h2>
            <ul>

                {tarefas.map((item,index) => (
                    <Item
                     key={index}
                    //primeira forma de fazer
                    //  tarefa={item.tarefa}
                    //  tempo={item.tempo}
                     {...item}
                     //segunda forma de fazer, desestruturação, não recomendado no uso de apis, pois pode vim muitas informações ou dados que necessitam de tipagem 
                    />
                ))}

            </ul>
        </aside>
    )
}