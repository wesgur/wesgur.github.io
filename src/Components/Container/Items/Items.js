import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Items = (props) => (
    <div style={props.style} className={classNames(styles.items)}>
        {props.children}
    </div>
);

export default Items;