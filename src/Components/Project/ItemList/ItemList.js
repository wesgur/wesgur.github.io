import React from 'react';

import classNames from 'classnames';

import styles from './style.module.scss';

const ItemList = (props) => (
    <ul>
        <div className={classNames(styles.itemlist)}>
            {props.children}
        </div>    
    </ul>    
);

export default ItemList;