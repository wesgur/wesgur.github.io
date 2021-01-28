import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const items = [
    {
        "title": "Home",
        "path": "/"
    },
    {
        "title": "Projects",
        "path": "/projects"        
    },
    {
        "title": "Resume",
        "path": "/resume"
    }
];

export const Menu = (props) => (
    <div className={classNames(styles.menu)}>
        { ItemMapper(items) }
    </div>
);

const ItemMapper = (items) => {
    return items.map((item, i) => (
        <div key={i} className={classNames(styles.items)}>
            <NavLink to={ item.path }> { item.title } </NavLink>
        </div>
    ));    
}