import React from 'react';

const List = props => (
  <ul>
    {props.task.map((item, index) => 
        <div>o<div></div><li key={index}>{item}</li></div>
    )}
  </ul>
);

export default List;