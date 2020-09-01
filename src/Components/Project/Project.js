import React from 'react';

import classNames from 'classnames';

import { default as ItemList } from './ItemList';
import { default as Item } from './Item';
import style from './style.module.scss';

// TODO: Image size consistency

const Project = (props) => (
    <div className={classNames(style.container)}>
        <h1> Projects </h1>

        <ItemList> 
            { props.projects.map((project, i) => {
                return (
                    <Item project={project} key={i}/>
                )
            })}
        </ItemList>
    </div>
);

export default Project;