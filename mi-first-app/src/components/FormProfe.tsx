// src/components/FormProfe.tsx
import React, { useState, useEffect, FormEvent } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
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
    <Form onSubmit={handleSubmit} className="mb-3">
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre del Item"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Nombre del Item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        {itemToEdit ? 'Actualizar Item' : 'Agregar Item'}
      </Button>
    </Form>
  );
};

export default FormProfe;