import React from 'react';

const Grocery = ({ id, name, price, complete, todoClick }) => (
  <li
  style= { complete ? {...styles.list, ...styles.complete } : styles.list
}
  onClick={ () => todoClick(id) }
  >
    { name }
  </li>
);

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Grocery;