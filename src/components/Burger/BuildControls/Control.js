import React from 'react';

import style from './Control.css';
const control = (props) => (
  <div className={style.Control}>

    <div className={style.Label}>{props.currentAmount} {props.label}</div>
    <button className={style.Less}
        onClick={props.removed}
        disabled={props.disabled}>Less</button>
    <button className={style.More}
          onClick={props.added}   >More</button>
  </div>

)
  

export  default control;