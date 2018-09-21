import React from 'react';
import style from './NavItem.css'

const navItem = (props) => (
    <li className={style.NavigationItem }>
        <a href={props.link}
            className={
                props.active ? style.active : null

            }> {props.children} </a>
    </li>

);

export default navItem;