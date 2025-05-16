// src/pages/AcercaPage.tsx (o SobreNosotrosPage.tsx)
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const AcercaPage: React.FC = () => {
  return (
    <Container className="my-5"> {/* mt-5 mb-5 se convierte en my-5 */}
      <Row>
        <Col xs={12} className="text-center mb-4">
          <h1 className="display-4">Nuestra Esencia Oscura</h1>
          <p className="lead">Más que moda, una declaración.</p>
          <hr style={{ borderTop: '1px solid #555' }} />
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="text-center mb-4 mb-md-0"> {/* Añadido margen inferior para móviles */}
          <h2>Origen Rebelde</h2>
          <p>
            ModaSur nació en las sombras de la conformidad, en el corazón de Santiago de Chile, 
            como un refugio para quienes visten su identidad sin pedir permiso. 
            Comenzamos como un pequeño rincón físico, curando piezas únicas que 
            resonaban con el espíritu post-punk, gótico y alternativo.
          </p>
          <p>
            Cansados del mainstream, decidimos tejer nuestra propia red, conectando 
            tres regiones con un estilo que desafía lo convencional. Ahora, 
            llevamos esa oscuridad curada directamente a tu pantalla.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <Image 
            src="/img/imagen_sobre_nosotros.png" // Desde public/img/
            alt="Ambiente Tienda ModaSur" 
            fluid  // Hace la imagen responsiva
            rounded // Añade bordes redondeados
            style={{ maxHeight: '350px', border: '1px solid #444' }} 
          />
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col md={6} className="mb-3 mb-md-0"> {/* Margen para móviles */}
          <h3>{/* <FaCrosshairs className="me-2" /> Opcional: Icono */} Misión</h3>
          <p>
            Vestir la individualidad. Ofrecemos prendas alternativas de calidad 
            que empoderan a nuestros clientes a expresar su verdadero yo, 
            desafiando las tendencias efímeras con estilo atemporal y oscuro.
          </p>
        </Col>
        <Col md={6}>
          <h3>{/* <FaEye className="me-2" /> Opcional: Icono */} Visión</h3>
          <p>
            Ser el epicentro online de la moda alternativa en la región y más allá. 
            Queremos construir una comunidad conectada por la estética oscura, 
            la autenticidad y la resistencia cultural a través de la moda.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="text-center mt-4">
          <hr style={{ borderTop: '1px solid #555' }} />
          <h2>El Equipo Detrás de las Sombras</h2>
          <p>
            Somos un colectivo unido por la pasión por lo alternativo. 
            Creemos en la autenticidad, la calidad y en construir un espacio 
            donde te sientas comprendido.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AcercaPage; // O export default SobreNosotrosPage;