import React from 'react';

const List = props => (
  <ul>
    {props.task.map((item) => 
        <li key={item.taskId}><div>0</div>{item.name}</li>
    )}
  </ul>
);

export default List;