// src/components/ItemProfe.tsx
import React from 'react';
import { ListGroup, Button, Stack } from 'react-bootstrap'; 
import Item from '../interfaces/Item';

interface ItemProfeProps {
  item: Item;
  deleteItem: (id: number) => void;
  editItem: (item: Item) => void;
}

const ItemProfe: React.FC<ItemProfeProps> = ({ item, deleteItem, editItem }) => {
  return (
    
    <ListGroup.Item 
      as="li" 
      className="d-flex justify-content-between align-items-center" // Clases de Bootstrap para alinear
    >
      <span className="me-auto">{item.value}</span> {/* Muestra el valor del item, 'me-auto' empuja los botones a la derecha */}
      
      {/* Stack ayuda a organizar los botones horizontalmente con un espacio */}
      <Stack direction="horizontal" gap={2}>
        <Button variant="outline-secondary" size="sm" onClick={() => editItem(item)}>
          Editar
        </Button>
        <Button variant="outline-danger" size="sm" onClick={() => deleteItem(item.id)}>
          Eliminar
        </Button>
      </Stack>
    </ListGroup.Item>
  );
};

export default ItemProfe;