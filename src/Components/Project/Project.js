import React from 'react';

import classNames from 'classnames';

import { default as Container } from '../Container';
import { default as ItemList } from './ItemList';
import { default as Item } from './Item';
import styles from './styles.module.scss';

// TODO: Image size consistency

const Project = (props) => (
    <Container>
        <h1> Projects </h1>

        <ItemList> 
            { props.projects.map((project, i) => {
                return (
                    <Item project={project} key={i}/>
                )
            })}
        </ItemList>
    </Container>
);

export default Project;