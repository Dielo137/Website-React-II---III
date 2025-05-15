// src/pages/ContactoPage.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

const ContactoPage: React.FC = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} className="text-center mb-4">
          <h1 className="display-4">Conéctate con la Oscuridad</h1>
          <p className="lead">Envíanos tus señales o encuéntranos en el mapa.</p>
          <hr style={{ borderTop: '1px solid #555' }} />
        </Col>
      </Row>

      <Row>
        {/* Columna del Formulario */}
        <Col md={6} className="mb-4 mb-md-0">
          <h2>Formulario de Contacto</h2>
          <ContactForm /> {/* <---  */}
        </Col>

        {/* Columna del Mapa */}
        <Col md={6}>
          <h2>Nuestra Ubicación</h2>
          <p>
            Encuentra nuestro refugio principal en Av. Alameda Libertador Bernardo O'Higgins 1621, 
            8340557 Santiago, Región Metropolitana.
          </p>
          
          <div className="map-responsive" style={{ 
              overflow: 'hidden', 
              paddingBottom: '75%',
              position: 'relative', 
              height: '0',
              border: '1px solid #333'
            }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177.0293524381689!2d-70.66040450303493!3d-33.445620553449515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a8431f6061%3A0xca4f2d3b7408a1a0!2sKathedral%20Store%20-%20dark%20-%20Goth%20.%20STyles%20alternativo!5e0!3m2!1ses-419!2scl!4v1744224496450!5m2!1ses-419!2scl" 
              style={{ 
                border:0,
                left: '0',
                top: '0',
                height: '100%',
                width: '100%',
                position: 'absolute',
                filter: 'grayscale(100%) invert(90%) contrast(90%)'
              }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
           <p className="mt-3 text-muted"><small>Horario de atención física: Lunes a Viernes de 11:00 a 19:00</small></p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactoPage;