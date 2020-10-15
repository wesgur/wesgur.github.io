import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';


const Brand = (props) => (
    <h1 className={classNames(styles.brand, { [styles.large]: props.large })}>
        <a target="_self" href={props.url}>
            <small>{props.subtitle}</small>{props.title}
        </a>
    </h1>
)

export default Brand;
