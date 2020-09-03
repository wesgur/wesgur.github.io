import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

const Maintenance = (props) => (
    <span className={classNames(styles.maintenance)}>
        <p> 🚧 This page is under maintenance 🚧 </p>
        <p> In the mean time, please check out my <a href="/projects"> projects </a> and <a href="/resume"> resume</a>.</p>
    </span>
);

export default Maintenance;