import React from 'react';

const layout = (props) => (
    <div className='layout'>
        <div className='logo'>ToDo-List</div>
        <div className='mainContainer'>
            {props.children}
        </div>

    </div>
);

export default layout;