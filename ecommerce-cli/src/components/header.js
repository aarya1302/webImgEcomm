import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../src/header.css";
var Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Navbar.Brand href="#">WebImg</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>

          <NavDropdown title="Category" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Graphics</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action4">Backgrounds</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav.Link>Sign In</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
