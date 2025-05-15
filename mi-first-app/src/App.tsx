
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


import HomePage from './pages/HomePage';
import AcercaPage from './pages/AcercaPage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage'; 
import GestionItemsPage from './pages/GestionItemsPage'; 


const App: React.FC = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/img/modasurlogo.png" 
              height="40"
              className="d-inline-block align-top"
              alt="ModaSur Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/acerca-de">Sobre Nosotros</Nav.Link> {/* Texto cambiado */}
              <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              {/* El enlace a Gestión Items (CRUD) se elimina de aquí */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acerca-de" element={<AcercaPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/gestion-items" element={<GestionItemsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;