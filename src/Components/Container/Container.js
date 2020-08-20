import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Container = (props) => (
    <div style={props.style} className={classNames(styles.container, { fluid: props.fluid })}>
        {props.children}
    </div>
);

export default Container;