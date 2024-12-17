import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarBoostrap.css';
import { Link as RouterLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const NavbarBoostrap = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLinkClick = (to: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 30,
          offset: -70, // Ajusta según la altura del navbar
        });
      }, 300); // Asegura que la página se cargue primero
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 30,
        offset: -70,
      });
    }
  };

  return (
    <Navbar expand="lg" className="containerPrincipal">
      <Container id="containerNavbar">
        <Navbar.Brand as={RouterLink} to="/" id="navLinkItem">ComputeUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleScrollLinkClick('inicio')} id="navLinkItem">Inicio</Nav.Link>
            <Nav.Link onClick={() => handleScrollLinkClick('modality')} id="navLinkItem">Modalidad</Nav.Link>
            <Nav.Link onClick={() => handleScrollLinkClick('programs')} id="navLinkItem">Programas</Nav.Link>
            <Nav.Link onClick={() => handleScrollLinkClick('instructors')} id="navLinkItem">Instructores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBoostrap;
