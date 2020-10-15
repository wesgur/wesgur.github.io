import React from 'react';

import classNames from 'classnames';

import styles from './styles.module.scss';

const PageTitle = (props) => (
    <h3 className={classNames(styles.title)}> 
        { props.title } 
    </h3>
);

export default PageTitle;