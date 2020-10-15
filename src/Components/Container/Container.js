import React from 'react';

import styles from './styles.module.scss';

import classNames from 'classnames';

export const Container = (props) => {
    return (
        <div className={classNames(styles.container)}>
            {props.children}
        </div>
    );
};