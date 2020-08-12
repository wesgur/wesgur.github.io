import React from 'react';

import { default as Brand } from './Brand';
import { default as Sidebar } from './Sidebar';

const appUrl = `${process.env.PUBLIC_URL}/`;

const Navigation = () => (
    <Sidebar>        
        <Sidebar.List>
            <Sidebar.Menu exact to='/' label='home' type='Home'/>
            <Sidebar.Menu to='/about' label='about' type='About'/>
            <Sidebar.Menu to='/project' label='project' type='Project' />
            <Sidebar.Menu to='/resume' label='resume' type='Resume' />
        </Sidebar.List>    
        <Sidebar.Footer>
            <Sidebar.Footer.Item link='https://www.github.com/wesgur' label='Github' type='Github' />    
            <Sidebar.Footer.Item link='https://www.linkedin.com/in/dong-hyuk-johnny-jin-76a06aaa/' label='LinkedIn' type='LinkedIn' />
            <Sidebar.Footer.Item link='https://stackoverflow.com/users/3639630/wesgur' label='Stackoverflow' type='Stackoverflow' />                
            <Sidebar.Footer.Item link='mailto:wesgur@gmail.com' label='Mail' type='Mail' />
        </Sidebar.Footer>            
    </Sidebar>
)

export default Navigation;
