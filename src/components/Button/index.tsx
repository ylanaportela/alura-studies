import React from "react";
import style from './Button.module.scss'

class Button extends React.Component <{children: any}>{
    render(){
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button

// export default function Button(props) {
//     return (
//         <button className={style.botao}>
//             {props.children}
//         </button>
//     )
// }
