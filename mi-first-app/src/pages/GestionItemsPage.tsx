// src/pages/GestionItemsPage.tsx
import React, { useState, useEffect } from 'react';
import FormProfe from '../components/FormProfe'; // Ajusta la ruta si es necesario
import ListProfe from '../components/ListProfe'; // Ajusta la ruta si es necesario
// import '../App.css'; // Si este CSS es específico para este CRUD, mantenlo o muévelo.
                       // Si es global, ya debería estar en index.css o App.tsx (el nuevo)
import Item from '../interfaces/Item'; // Ajusta la ruta si es necesario
import { Container } from 'react-bootstrap';

const GestionItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('items');
    if (data) {
      try {
        const storedItems: Item[] = JSON.parse(data);
        setItems(storedItems);
      } catch (error) {
        console.error('Error parsing items from localStorage:', error);
        setItems([]);
      }
    } else {
      setItems([]);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value: string) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), value }]);
      setItemToEdit(null);
    }
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item: Item) => {
    setItemToEdit(item);
  };

  return (
    <Container> {/* Envuelve con un Container de React-Bootstrap para consistencia */}
      <h1>CRUD con LocalStorage</h1>
      <FormProfe addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <ListProfe items={items} deleteItem={deleteItem} editItem={editItem} />
    </Container>
  );
};

export default GestionItemsPage;