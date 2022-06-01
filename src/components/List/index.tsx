import { Itarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from './List.module.scss'


export default function List({tarefas}: {tarefas: Itarefa[]}){
    return(
        <aside className={style.listaTarefas}>

            <h2>Estudos do dia</h2>
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