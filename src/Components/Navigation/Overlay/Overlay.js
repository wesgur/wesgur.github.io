import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';


const Overlay = (props) => (
    <div
        onClick={props.onClick}
        className={classNames(styles.overlay, { [styles.show]: props.show })}
    />
)

export default Overlay;
