import React from 'react';
import Item from '../interfaces/Item';

interface ItemProfeProps {
  item: Item;
  deleteItem: (id: number) => void;
  editItem: (item: Item) => void;
}

const ItemProfe: React.FC<ItemProfeProps> = ({ item, deleteItem, editItem }) => {
  return (
    <li>
      {item.value}
      <button onClick={() => editItem(item)}>Editar</button>
      <button onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
};

export default ItemProfe;
