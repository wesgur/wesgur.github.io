import React from 'react';
import classNames from 'classnames';

import { default as ContainerItem } from './Item';
import { default as ContainerItems } from './Items';

import styles from './styles.module.scss';

const Container = (props) => (
    <div style={props.style} className={classNames(styles.container, { fluid: props.fluid })}>
        {props.children}
    </div>
);

Container.Item = ContainerItem;
Container.Items = ContainerItems;

export default Container;