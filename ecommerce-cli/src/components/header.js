import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../src/style/header.css";
var Header = ({ user }) => {
  var handleSignOut = () => {
    localStorage.removeItem("user");

    window.location.replace("/");
  };
  var navAccountDropIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-person-fill centerImg"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
      Account
    </>
  );
  return (
    <Navbar bg="light" expand="lg" className="nav text-center">
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
        <Nav>
          {user ? (
            <>
              <NavDropdown
                title={navAccountDropIcon}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>
                  <Link to="/profile">View Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item onClick={handleSignOut}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <Nav.Link>
              <Link to="/signin">Sign In</Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
