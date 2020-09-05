import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import classNames from 'classnames';

import styles from './styles.module.scss';

const duration = 200;

const defaultStyle = {
    transition: `height ${duration}ms ease-in-out`
};

const transitionStyles = {
    entering: styles.collapsing,
    entered: styles.expanded,
    exiting: styles.collapsing,
    exited: styles.collapsed,
};

class Collapse extends Component {

    /* -- Expanding -- */
    handleEnter = (elem) => {
        elem.style.transition = defaultStyle.transition;
        elem.style.height = '0'
    }

    handleEntering = (elem) => {
        elem.style.height = `${elem.scrollHeight}px`;
    }

    handleEntered = (elem) => {
        elem.style.transition = null;
        elem.style.height = null
    }

    /* -- Collapsing -- */
    handleExit = (elem) => {
        elem.style.transition = defaultStyle.transition;
        elem.style.height = `${elem.offsetHeight}px`;
        void(elem.offsetHeight);
    }

    handleExiting = (elem) => {
        elem.style.height = '0';
    }

    handleExited = (elem) => {
        elem.style.transition = null;
        elem.style.height = null;
    }

    render() {
        return (
            <Transition
                in={this.props.in}
                timeout={duration}
                onEnter={this.handleEnter}
                onEntering={this.handleEntering}
                onEntered={this.handleEntered}
                onExit={this.handleExit}
                onExiting={this.handleExiting}
                onExited={this.handleExited}
            >
                {(state) =>
                    React.cloneElement(this.props.children, {
                        className: classNames(
                            this.props.children.props.className,
                            transitionStyles[state]
                        )
                    })
                }
            </Transition>
        );
    }
}


export default Collapse;
