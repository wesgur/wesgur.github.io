import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

/* Font Awesome Icons */
import { FaGithub, FaStackOverflow, FaLinkedin, FaHome, FaCode, FaEnvelopeOpenText, FaUser, FaQuestion, FaRegFilePdf } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

import styles from './styles.module.scss';

const Sidebar = (props) => (
    <div className={classNames(styles.sidebar)}>
        {props.children}
    </div>
)

const List = (props) => (
    <nav className={classNames(styles.nav)}>
        {props.children}
    </nav>
)

const Menu = (props) => (
    <NavLink
        to={props.to}
        exact={props.exact}
        className={classNames(styles['nav-item'])}
        activeClassName='active'
    >
        <NavIcon {...props}/>
    </NavLink>
)

const NavIcon = (props) => {
    return (
        <div className={classNames(styles['nav-icon'])}>
            <i> { NavIconMapper(props.type) } </i>        
            <b> {props.type} </b>
        </div>    
    )
}

const NavIconMapper = (type) => {
    const NAV_ICON_SIZE = 24;
    switch(type){
        case "Home":
            return <FaHome size={NAV_ICON_SIZE} />
        case "About":
            return <FaUser size={NAV_ICON_SIZE}/>
        case "Project":
            return <FaCode size={NAV_ICON_SIZE}/>  
        case "Resume":
            return <FaRegFilePdf size={NAV_ICON_SIZE}/>
        default:
            return <FaQuestion size={NAV_ICON_SIZE}/>          
    }
}

const FooterItemIcon = (props) => {
    const FOOTER_ICON_SIZE = 18

    switch(props.type){
        case "Github":
            return <FaGithub size={FOOTER_ICON_SIZE}/>
        case "Stackoverflow":
            return <FaStackOverflow size={FOOTER_ICON_SIZE}/>
        case "LinkedIn":
            return <FaLinkedin size={FOOTER_ICON_SIZE}/>  
        case "Mail":
            return <FiMail size={FOOTER_ICON_SIZE}/>        
        default:
            return <FaEnvelopeOpenText size={FOOTER_ICON_SIZE}/>          
    }
}

const Footer = (props) => (
    <div className={classNames(styles.footer)}>
        {props.children}
    </div>
)

const FooterItem = (props) => (
    <div className={classNames(styles["footer-item"])}>
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
            <FooterItemIcon {...props}/>
        </a>        
    </div>
)

Sidebar.Footer = Footer;
Sidebar.Footer.Item = FooterItem;
Sidebar.List = List;
Sidebar.Menu = Menu;

export default Sidebar;

