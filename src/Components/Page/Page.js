import React from 'react';

import styles from './styles.module.scss';

const Page = (props) => (
    <div className={styles.page}>{props.children}</div>
)


export default Page;
