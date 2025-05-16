// src/components/ContactForm.tsx
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Form, Button, Alert, FloatingLabel } from 'react-bootstrap';

// 1. Definir la interfaz para los datos del formulario (Tipado con TypeScript)
interface IFormData {
  nombre: string;
  email: string;
  asunto: string; // Asunto es opcional en tu HTML original, aquí lo haremos requerido por simplicidad,
                  // o puedes hacerlo opcional: asunto?: string;
  mensaje: string;
}

// Interfaz para los errores de validación
interface IFormErrors {
  nombre?: string;
  email?: string;
  asunto?: string;
  mensaje?: string;
  general?: string; // Para errores generales o de envío
}

const ContactForm: React.FC = () => {
  // 2. Estado para los campos del formulario
  const [formData, setFormData] = useState<IFormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  // 3. Estado para los errores de validación
  const [errors, setErrors] = useState<IFormErrors>({});

  // 4. Estado para el mensaje de éxito
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // 5. Manejador de cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Limpiar error específico al escribir y mensaje de éxito/error general
    if (errors[name as keyof IFormErrors]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }
    setErrors(prevErrors => ({ ...prevErrors, general: undefined }));
    setIsSubmitted(false);
  };

  // 6. Función de validación
  const validateForm = (): boolean => {
    const newErrors: IFormErrors = {};
    let isValid = true;

    // Validación de nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio.';
      isValid = false;
    }

    // Validación de email (obligatorio y formato)
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else {
      // Expresión regular simple para formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'El formato del correo electrónico no es válido.';
        isValid = false;
      }
    }
    
    // Validación de asunto (si lo haces opcional, ajusta esta lógica)
    if (!formData.asunto.trim()) {
      newErrors.asunto = 'El asunto es obligatorio.';
      isValid = false;
    }

    // Validación de mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 7. Manejador del envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false); 
    setErrors({}); 

    if (validateForm()) {
      try {

        let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        console.log('Datos guardados en LocalStorage:', formData);
        setIsSubmitted(true); // Mostrar mensaje de éxito
        


      } catch (error) {
        console.error('Error al guardar en LocalStorage:', error);
        setErrors({ general: 'Hubo un error al guardar los datos. Inténtalo de nuevo.' });
      }
    } else {
      console.log('Validación fallida');

    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate> {/* noValidate evita validación HTML5 por defecto */}
      {/* Mensaje de éxito */}
      {isSubmitted && (
        <Alert variant="success" onClose={() => setIsSubmitted(false)} dismissible>
          ¡Mensaje enviado y datos guardados con éxito!
        </Alert>
      )}

      {/* Mensaje de error general */}
      {errors.general && (
        <Alert variant="danger" onClose={() => setErrors(prev => ({...prev, general: undefined}))} dismissible>
          {errors.general}
        </Alert>
      )}

      {/* Campo Nombre */}
      <FloatingLabel controlId="formNombre" label="Tu Nombre" className="mb-3">
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          isInvalid={!!errors.nombre}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombre}
        </Form.Control.Feedback>
      </FloatingLabel>

      {/* Campo Email */}
      <FloatingLabel controlId="formEmail" label="Tu Email" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="tu.correo@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </FloatingLabel>

      {/* Campo Asunto */}
      <FloatingLabel controlId="formAsunto" label="Asunto" className="mb-3">
        <Form.Control
          type="text"
          name="asunto"
          placeholder="Motivo de tu contacto"
          value={formData.asunto}
          onChange={handleChange}
          isInvalid={!!errors.asunto}
          required 
        />
        <Form.Control.Feedback type="invalid">
          {errors.asunto}
        </Form.Control.Feedback>
      </FloatingLabel>

      {/* Campo Mensaje */}
      <FloatingLabel controlId="formMensaje" label="Tu Mensaje" className="mb-3">
        <Form.Control
          as="textarea"
          name="mensaje"
          placeholder="Escribe aquí tu consulta..."
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          isInvalid={!!errors.mensaje}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.mensaje}
        </Form.Control.Feedback>
      </FloatingLabel>

      <Button variant="outline-light" type="submit" className="btn-block"> {/* btn-block para ocupar ancho, o usa d-grid */}
        Enviar Mensaje
      </Button>
    </Form>
  );
};

export default ContactForm;