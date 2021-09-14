import React from 'react';

const List = props => (
  <ul>
        <li key={props.taskId}><div onClick={props.isDoneHandler}>{props.isDone}0</div>{props.name}</li>
  </ul>
);

export default List;