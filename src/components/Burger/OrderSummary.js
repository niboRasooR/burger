import React, {Component} from 'react'

import Aux from '../../hoc/Aux';
const orderSummary = (props) => {

    const igList = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                            {igKey}: {props.ingredients[igKey]}</span>
                    </li>
        })
    return(
        <Aux>
        <h3>Your order</h3>
        <ul>
            {igList}
        </ul>
        <button onClick={props.continue}>
            Continue
        </button>
        <button onClick={props.modalClosed} >
            cancel
        </button>
        </Aux>

    )
   
       


};

export default orderSummary;