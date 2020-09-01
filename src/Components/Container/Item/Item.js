import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Item = (props) => (
    <div style={props.style} className={classNames(styles.item)}>
        {props.children}
    </div>
);

export default Item;