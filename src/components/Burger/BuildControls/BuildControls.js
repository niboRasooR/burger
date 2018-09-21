import React from 'react'
import styles from './BuildConrols.css';

import Control from './Control';

  const controls = [
    {label: 'Salad', choise:  'salad'},
    {label: 'Bacon', choise:  'bacon'},
    {label: 'Cheese', choise: 'cheese'},
    {label: 'Meat', choise:  'meat'}
  ];

  const buildControls = (props) => (
    
    <div className={styles.BuildControls}>
     <p>Price:<strong>{props.price.toFixed(2)}</strong> </p>
      {controls.map(ctrl => (
        <Control 
           key={ctrl.label}  
           label={ctrl.label}
           currentAmount = {ctrl.amount}
           added={ ()=> props.ingredientAdded(ctrl.choise) }
           removed={ () => props.ingredientRemoved(ctrl.choise)}
           disabled={props.disabled[ctrl.choise]}
           />
      )) }
      <button className={styles.OrderButton}
        disabled={!props.purc}
        onClick={props.ordered}>ORDER </button>
    </div>
  );
  export default buildControls;

