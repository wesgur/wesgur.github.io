import React from 'react';

import { default as Brand } from '../Brand';
import { default as Navbar } from './Navbar';
import { default as Sidebar } from './Sidebar';

import styles from './styles.module.scss';

const appUrl = `${process.env.PUBLIC_URL}/`;
const brand = {
    "title": "Dong Hyuk Jin",
    "subtitle": "Johnny"
};

const social = {
    "github" : "https://www.github.com/wesgur",
    "linkedin" : "https://www.linkedin.com/in/dong-hyuk-johnny-jin-76a06aaa/",
    "stackoverflow" : "https://stackoverflow.com/users/3639630/wesgur",
    "mail" : "mailto:wesgur@gmail.com"
}

const Navigation = (props) => (
    <Sidebar>        
        <Sidebar.List>
            <Sidebar.Menu exact to='/' label='home' type='Home'/>
            <Sidebar.Menu to='/about' label='about' type='About'/>
            <Sidebar.Menu to='/projects' label='projects' type='Projects' />
            <Sidebar.Menu to='/resume' label='resume' type='Resume' />
        </Sidebar.List>    
        <Sidebar.Footer>
            <Sidebar.Footer.Item link={social.github} label='Github' type='Github' />    
            <Sidebar.Footer.Item link={social.linkedin} label='LinkedIn' type='LinkedIn' />
            <Sidebar.Footer.Item link={social.stackoverflow} label='Stackoverflow' type='Stackoverflow' />                
            <Sidebar.Footer.Item link={social.mail} label='Mail' type='Mail' />
        </Sidebar.Footer>            
    </Sidebar>
);

const NavigationTopbar = () => (
    <Navbar>
        <Navbar.Toggle />
        <Brand {...brand} url={appUrl} />
        <Navbar.Collapse>
            <Navbar.List>
                <Navbar.Menu exact to='/' label='home' />
                <Navbar.Menu to='/about' label='about' />
                <Navbar.Menu to='/projects' label='projects' />
                <Navbar.Menu to='/resume' label='resume'/>
            </Navbar.List>
            <Navbar.Footer>
                <Sidebar.Footer.Item link={social.github} label='Github' type='Github' />    
                <Sidebar.Footer.Item link={social.linkedin} label='LinkedIn' type='LinkedIn' />
                <Sidebar.Footer.Item link={social.stackoverflow} label='Stackoverflow' type='Stackoverflow' />                
                <Sidebar.Footer.Item link={social.mail} label='Mail' type='Mail' />
            </Navbar.Footer>
        </Navbar.Collapse>
    </Navbar>
);

Navigation.Topbar = NavigationTopbar;

export default Navigation;