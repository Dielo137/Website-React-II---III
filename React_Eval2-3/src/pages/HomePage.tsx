// src/pages/HomePage.tsx
import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <Carousel fade className="mb-4">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/ropa1.png"
              alt="Imagen 1 del carrusel de ropa alternativa"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/ropa2.png"
              alt="Imagen 2 del carrusel de ropa alternativa"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/ropa3.png"
              alt="Imagen 3 del carrusel de ropa alternativa"
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        </Carousel>

        <Container className="mt-4">
          <Row className="mt-4 mb-4">
            {/* Card 1: Nuevas Colecciones */}
            <Col lg={4} md={6} className="mb-4">
              <Card className="h-100 bg-dark text-white border-secondary">
                <Card.Img 
                  variant="top" 
                  src="/img/ropa4.png" 
                  alt="Nuevas Colecciones de ropa gótica" 
                  style={{ height: '200px', objectFit: 'contain' }} 
                />
                {/* Aplicar text-center al Card.Body o a elementos individuales */}
                <Card.Body className="d-flex flex-column text-center"> {/* <--- TEXTO CENTRADO AQUÍ */}
                  <Card.Title>Nuevas Colecciones</Card.Title>
                  <Card.Text>
                    Descubre lo último que ha llegado a nuestras sombras.
                  </Card.Text>
                  <Button 
                    as={Link as any} 
                    to="/servicios" 
                    variant="outline-light" 
                    className="mt-auto" // El botón en sí no se centrará con text-center en el body si usa mt-auto
                                       // Si quieres centrar el botón también, necesitarías envolverlo o usar clases de margen (ej. mx-auto d-block)
                  >
                    Ver Ahora
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2: Clásicos Góticos */}
            <Col lg={4} md={6} className="mb-4">
              <Card className="h-100 bg-dark text-white border-secondary">
                <Card.Img 
                  variant="top" 
                  src="/img/ropa5.png" 
                  alt="Clásicos Góticos ropa oscura" 
                  style={{ height: '200px', objectFit: 'contain' }} 
                />
                <Card.Body className="d-flex flex-column text-center"> {/* <--- TEXTO CENTRADO AQUÍ */}
                  <Card.Title>Clásicos Góticos</Card.Title>
                  <Card.Text>
                    Piezas atemporales que definen la esencia oscura.
                  </Card.Text>
                  <Button 
                    as={Link as any} 
                    to="/servicios" 
                    variant="outline-light" 
                    className="mt-auto"
                  >
                    Explorar Clásicos
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3: Ediciones Limitadas */}
            <Col lg={4} className="mb-4">
              <Card className="h-100 bg-dark text-white border-secondary">
                <Card.Img 
                  variant="top" 
                  src="/img/ropa6.png" 
                  alt="Ediciones Limitadas de ropa alternativa exclusiva" 
                  style={{ height: '200px', objectFit: 'contain' }} 
                />
                <Card.Body className="d-flex flex-column text-center"> {/* <--- TEXTO CENTRADO AQUÍ */}
                  <Card.Title>Ediciones Limitadas</Card.Title>
                  <Card.Text>
                    Exclusividad y estilo único antes de que desaparezcan.
                  </Card.Text>
                  <Button 
                    as={Link as any} 
                    to="/servicios" 
                    variant="outline-light" 
                    className="mt-auto"
                  >
                    Descubrir Exclusivas
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      {/* No incluimos el Footer aquí, ya que se maneja globalmente en App.tsx */}
      {/* Si lo tenías duplicado, esta versión lo omite de HomePage.tsx */}
    </>
  );
};

export default HomePage;