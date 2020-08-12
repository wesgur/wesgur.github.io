import React from 'react';
import classNames from 'classnames';

const Container = (props) => (
    <div style={props.style} className={classNames('container', { fluid: props.fluid })}>
        {props.children}
    </div>
)

export default Container;
