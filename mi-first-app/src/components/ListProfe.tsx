import React from 'react';
import ItemProfe from './ItemProfe';
import Item from '../interfaces/Item';

interface ListProfeProps {
  items: Item[];
  deleteItem: (id: number) => void;
  editItem: (item: Item) => void;
}

const ListProfe: React.FC<ListProfeProps> = ({ items, deleteItem, editItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <ItemProfe
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
};

export default ListProfe;
