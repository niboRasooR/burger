import React from 'react';

import style from './Controls.css';
const control = (props) => (
  <div className={style.Control}>
    <div className={style.Label}>{props.label}</div>
    <button className={style.Less}>Less</button>
    <button className={style.More}>More</button>
  </div>

)
  

export  default control;