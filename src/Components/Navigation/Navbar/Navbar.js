import React, {
    useState,
    useContext
} from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Collapsible from '../Collapsible';
import Overlay from '../Overlay';

import styles from './styles.module.scss';


const NavbarContext = React.createContext({ expanded: false });

const Navbar = (props) => {
    const [expanded, setExpanded] = useState(false);
    const contextValue = { expanded, setExpanded };

    const handleBackdropClick = () => {
        setExpanded(false);
    }

    return (
        <NavbarContext.Provider value={contextValue}>
            <header className={classNames(styles.navbar, { [styles.expanded]: expanded })}>
                {props.children}
            </header>
            <Overlay
                show={expanded}
                onClick={handleBackdropClick}
            />
        </NavbarContext.Provider>
    );
}

const Toggle = () => {
    const { expanded, setExpanded } = useContext(NavbarContext);
    const handleClick = () => {
        if (setExpanded) setExpanded(!expanded);
    }

    return (
        <button
            type='button'
            onClick={handleClick}
            className={classNames(styles.navToggle, { [styles.active]: expanded })}
        >
            <span></span>
        </button>
    );
}

const Collapse = (props) => {
    const { expanded } = useContext(NavbarContext);

    return (
        <Collapsible in={expanded}>
            <div className={styles.navCollapse}>
            {props.children}
            </div>
        </Collapsible>
    );
}

const List = (props) => (
    <nav className={styles.nav}>
        {props.children}
    </nav>
)

const Menu = (props) => {
    const { expanded, setExpanded } = useContext(NavbarContext);
    const handleClick = () => {
        if (expanded) setExpanded(!expanded);
    }

    return (
        <NavLink
            to={props.to}
            exact={props.exact}
            onClick={handleClick}
            className={styles.navItem}
            activeClassName={styles.active}
        >
            {props.label}
        </NavLink>
    );
}


Navbar.Collapse = Collapse;
Navbar.Toggle = Toggle;
Navbar.List = List;
Navbar.Menu = Menu;

export default Navbar;
