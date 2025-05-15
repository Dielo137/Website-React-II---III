import React, { useState, useEffect, FormEvent } from 'react';
import Item from '../interfaces/Item';

interface FormProfeProps {
  addOrUpdateItem: (value: string) => void;
  itemToEdit: Item | null;
}

const FormProfe: React.FC<FormProfeProps> = ({ addOrUpdateItem, itemToEdit }) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
    } else {
      setInputValue('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
};

export default FormProfe;