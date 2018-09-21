import React from 'react'
import styles from './Toolbar.css';
import NavigationItems from './NavigationItems';
import DrawerToggle from './SideDrawer/DrawerToggle';

const toolbar = (props) =>(
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.clickedMenu}>MENU</DrawerToggle>
        <div>LOGO</div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;