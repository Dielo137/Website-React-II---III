// src/pages/ContactoPage.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Más adelante aquí importarás y usarás tu componente de formulario de contacto

const ContactoPage: React.FC = () => {
  return (
    <Container className="my-5"> {/* my-5 es margen vertical */}
      <Row className="justify-content-center">
        <Col md={8} lg={6}> {/* Columna para centrar el contenido */}
          <h1 className="text-center mb-4">Contacto</h1>
          <p className="text-center">
            Aquí irá el formulario de contacto y la información relevante.
          </p>
          {/* 
            Aquí es donde, más adelante, integrarás el componente 
            del formulario que cumpla con los requisitos de la Evaluación II 
            (validación de correo, almacenamiento en LocalStorage).
            
            Por ejemplo:
            import ContactForm from '../components/ContactForm'; // Suponiendo que lo creas ahí
            <ContactForm /> 
          */}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactoPage; // <--- ¡ESTA LÍNEA ES CRUCIAL!