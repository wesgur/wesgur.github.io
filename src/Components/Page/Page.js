import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

const Page = (props) => (
    <div className={classNames(styles.page)}>
        {props.children}
    </div>
);

export default Page;