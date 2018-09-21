import React from 'react';

import NavigationItems from '../NavigationItems';
import styles from './SideDrawer.css';
import Aux from '../../../hoc/Aux';
const sideDrawer = (props) =>{
    
    let openOrClosedStyles = [styles.SideDrawer, styles.Close ];

    if (props.open){
       openOrClosedStyles =   [styles.SideDrawer, styles.Open ];

    }

    return(
        <Aux >
            <div onClick={props.clicked} className={openOrClosedStyles.join(' ')}>
            <nav>
             <NavigationItems closed={props.closed}></NavigationItems>
            </nav>
          
        </div>
        </Aux>
       
    );
}

export default sideDrawer;