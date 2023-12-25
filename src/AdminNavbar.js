import React from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

const AdminNavbar = () => {
  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      style={{ height: "200px", fontSize: "50px", color: "wheat" }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: "70px" }}>
          Admin
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/login" style={{ color: "wheat" }}>
            Çıxış
          </Nav.Link>
        </Nav>
      </Container>
      <Button variant="info" style={{ fontSize: "50px", marginRight: "100px" }}>
        Tənzimləmələr <Badge bg="primary">9</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
      <Button variant="info" style={{ fontSize: "50px", marginRight: "200px" }}>
        Mesajlar <Badge bg="primary">3</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
    </Navbar>
  );
};

export default AdminNavbar;
