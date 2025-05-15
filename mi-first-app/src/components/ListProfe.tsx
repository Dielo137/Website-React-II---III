// src/components/ListProfe.tsx (Recordatorio de cómo debería verse)
import React from 'react';
import { ListGroup } from 'react-bootstrap'; // Importar ListGroup
import ItemProfe from './ItemProfe';
import Item from '../interfaces/Item';

interface ListProfeProps {
  items: Item[];
  deleteItem: (id: number) => void;
  editItem: (item: Item) => void;
}

const ListProfe: React.FC<ListProfeProps> = ({ items, deleteItem, editItem }) => {
  return (
    <ListGroup as="ul" className="mt-3"> {/* Usar ListGroup en lugar de ul directo */}
      {items.length > 0 ? (
        items.map((item) => (
          <ItemProfe
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))
      ) : (
        <ListGroup.Item>No hay items para mostrar.</ListGroup.Item> // Mensaje si no hay items
      )}
    </ListGroup>
  );
};

export default ListProfe;