import React from 'react';

import Burger from '../Burger/Burger';
import styles from './CheckoutSummary.css';
const checkoutSummary = (props) =>{

    
    return (
        <div className={styles.CheckoutSummary}>
            <h1>Here it is</h1>
            <div style={{width: '100%', 
                        
                    margin: 'auto'}}>
                
                <Burger ingredients={props.ingredients}/>
            </div>

             <button onClick={props.checkoutCancelled}>CANCEL</button>
             <button onClick={props.checkoutContinued}>CONTINUE</button>
        </div>

    );

}

export default checkoutSummary;