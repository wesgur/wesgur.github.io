import React from 'react';

import classNames from 'classnames';
import { Container } from 'react-bootstrap';

import { default as Brand } from './Brand';
import { default as Navbar } from './Navbar';
import { Menu } from './Menu';

import styles from './styles.module.scss';

const appUrl = `${process.env.PUBLIC_URL}/`;
const brand = {
    "title": "Dong Hyuk Jin",
    "subtitle": "Johnny"
};

const Navigation = (props) => (
    <Navbar>
        <Content>
            <Brand {...brand} url={appUrl} />
            
            <Menu/>
        </Content>
    </Navbar>
);

const Content = (props) => (
    <Container className={classNames(styles.content)}>
        {props.children}
    </Container>        
);

Navigation.Content = Content;

export default Navigation;