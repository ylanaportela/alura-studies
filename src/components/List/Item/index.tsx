import style from '../List.module.scss'

export default function Item({tarefa, tempo}: {tarefa: string, tempo: string}) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}


// 2 formas de definir a props 
// export default function Item(props: {tarefa: string, tempo: string}) {
//     const {tarefa, tempo} = props
//     return (