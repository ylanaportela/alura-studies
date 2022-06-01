import { Itarefa } from '../../../types/ITarefa'
import style from './Item.module.scss'


interface Props extends Itarefa{
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}


export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => { selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado, 
            id
        })}}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}


// 2 formas de definir a props 
// export default function Item(props: {tarefa: string, tempo: string}) {
//     const {tarefa, tempo} = props
//     return (