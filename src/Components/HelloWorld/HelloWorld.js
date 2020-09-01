import React from 'react';

import styles from './styles.module.scss';

const HelloWorld = (props) => (
    <div className={styles["hello-world"]}>
        {props.children}
    </div>
);

export default HelloWorld;