import React from 'react';

import style from '/.Input.css'
const input = (props ) => {
    
    let inputElement = null;

    switch (props.inputtype){
        case ('input'):
            inputElement = <input className={style.InputElement} {...props}/>;
            break;
        case ('textarea'):
            inputElement =  <textarea className={style.InputElement} {...props}/>;
            break;
        case ('')
            break;
        default:
             inputElement = <input className={style.InputElement}
             {...props}/>


    } 
    return(
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
 
}

export default input;