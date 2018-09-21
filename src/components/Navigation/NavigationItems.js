import React from 'react'
import styles from './NavigationItems.css';
import NavItem from './NavItem';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
      <NavItem link="/" active onClick={props.closed} >
          Burger Builder
      </NavItem>
      <NavItem link="/" onClick={props.closed}>
          Checkout 
      </NavItem>
    </ul>
);

export default navigationItems;