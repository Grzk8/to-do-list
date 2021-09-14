import React from 'react';

const List = props => (
  <ul>
        <li className='tasksList' key={props.taskId}><div onClick={props.isDoneHandler}>{props.isDone}</div>{props.name}</li>
  </ul>
);

export default List;