import React from 'react';

const input = (props) => {

    let inputElement = null;
    const inputClasses = [inputElement];

    inputElement = <input className={inputClasses.join(' ')} 
        {...props.config}
        placecholder={props.placecholder}
        id={props.id} 
        onChange={props.changed} 
        value={props.value} />

    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;