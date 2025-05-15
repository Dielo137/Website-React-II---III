import React, { useState, useEffect } from 'react';
import FormProfe from './components/FormProfe';
import ListProfe from './components/ListProfe';
import './App.css';
import Item from './interfaces/Item';

function App() {

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

  const addOrUpdateItem = (value :string) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } :
        item));
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
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <FormProfe addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <ListProfe items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}
export default App;