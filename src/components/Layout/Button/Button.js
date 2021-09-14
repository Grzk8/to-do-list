import React from 'react';

const button = (props) => (
    <button
    onClick={props.clicked}
    className={props.className}
    disabled={props.disabled}
    >{props.children}</button>
);

export default button;