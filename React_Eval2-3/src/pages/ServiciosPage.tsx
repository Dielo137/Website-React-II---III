// src/pages/ServiciosPage.tsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Si los botones "Ver Detalles" llevaran a otra página

const ServiciosPage: React.FC = () => {

  const productos = [
    {
      imgSrc: '/img/producto1.png',
      alt: 'Chaqueta Medianoche',
      title: 'Chaqueta "Medianoche"',
      text: 'Cuero sintético vegano, tachuelas y forro interior satinado. Perfecta para noches rebeldes.',
      price: '$75.990',
      conditions: 'Stock limitado.',
    },
    {
      imgSrc: '/img/producto2.png',
      alt: 'Vestido Niebla Eterna',
      title: 'Vestido "Niebla Eterna"',
      text: 'Terciopelo negro con detalles de encaje. Elegancia gótica para cualquier ocasión oscura.',
      price: '$62.500',
      conditions: 'Limpieza en seco recomendada.',
    },
    {
      imgSrc: '/img/producto3.png',
      alt: 'Botines Paso Nocturno',
      title: 'Botines "Paso Nocturno"',
      text: 'Plataforma robusta, hebillas metálicas y cremallera lateral. Comodidad y actitud.',
      price: '$89.990',
      conditions: 'Material sintético.',
    },
    {
      imgSrc: '/img/producto4.png',
      alt: 'Camiseta Eco Distópico',
      title: 'Camiseta "Eco Distópico"',
      text: 'Algodón orgánico con estampado serigrafiado exclusivo. Arte post-punk para llevar.',
      price: '$28.000',
      conditions: 'Edición limitada.',
    },
    {
      imgSrc: '/img/producto5.png',
      alt: 'Falda Asimétrica Lunar',
      title: 'Falda "Asimétrica Lunar"',
      text: 'Corte irregular, tela ligera y cómoda con estampado sutil de fases lunares.',
      price: '$45.500',
      conditions: 'Tallas XS a XL.',
    },
    {
      imgSrc: '/img/producto6.png',
      alt: 'Bolso Cripta Urbana',
      title: 'Bolso "Cripta Urbana"',
      text: 'Diseño estructurado con compartimentos múltiples y cadena metálica oscura.',
      price: '$55.900',
      conditions: 'Cierre magnético.',
    },
  ];

  return (
    <Container className="my-5"> {/* mt-5 mb-5 se convierte en my-5 */}
      <Row>
        <Col xs={12} className="text-center mb-4">
          <h1 className="display-4">Colecciones Oscuras</h1>
          <p className="lead">Descubre nuestras piezas seleccionadas.</p>
          <hr style={{ borderTop: '1px solid #555' }} />
        </Col>
      </Row>

      <Row>
        {productos.map((producto, index) => (
          <Col lg={4} md={6} className="mb-4" key={index}>
            <Card className="h-100 bg-dark text-white border-secondary">
              <Card.Img
                variant="top"
                src={producto.imgSrc}
                alt={producto.alt}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.text}</Card.Text>
                <p className="font-weight-bold">{producto.price}</p>
                <Card.Text>
                  <small className="text-muted">Condiciones: {producto.conditions}</small>
                </Card.Text>
                {/* Si el botón debe llevar a una página de detalle de producto:
                <Button as={Link} to={`/producto/${producto.id}`} variant="outline-light" className="mt-auto">
                  Ver Detalles
                </Button> 
                Sino, un botón normal: */}
                <Button variant="outline-light" className="mt-auto" onClick={() => alert(`Detalles de ${producto.title}`)}>
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiciosPage;