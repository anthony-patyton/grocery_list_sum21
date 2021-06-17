import React from 'react';
import Grocery from './Grocery.js';

const List = ({ items, name, todoClick }) => (
  <>
    <h2>{name}</h2>
    <ul>
      <li>
        { items.map( item => <Grocery key={item.id} {...item} todoClick={todoClick} /> )}
      </li>
    </ul>
  </>
);

export default List;