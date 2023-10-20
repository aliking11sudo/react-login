import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-primary color-primary">
      <Container>
        <Navbar.Brand href="#home">React-LogIn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="More Than Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/aliking11sudo">Git-hub</NavDropdown.Item>
              <NavDropdown.Item href="https://t.me/ifsha256">
            Telegram
              </NavDropdown.Item>
              <NavDropdown.Item href="">Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;