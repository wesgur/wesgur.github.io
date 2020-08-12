import React from 'react';

const Brand = (props) => (
    <h1 className='brand'>
        <a target="_self" href={props.url}>
            <small>{props.subtitle}</small>{props.title}
        </a>
    </h1>
)

export default Brand;
