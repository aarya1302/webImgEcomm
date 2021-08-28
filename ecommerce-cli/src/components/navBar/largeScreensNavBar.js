import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Container,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const LargeScreensNavBar = ({ user }) => {
  var handleSignOut = () => {
    localStorage.removeItem("user");

    window.location.replace("/");
  };

  var navAccountDropIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-person-fill centerImg"
        viewBox="0 0 16 16"
      >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
      Account
    </>
  );
  var navCategoryDropIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-list-nested"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <br></br>
      Category
    </>
  );
  var cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-cart2"
      viewBox="0 0 16 16"
    >
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    </svg>
  );
  var homeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-house"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
      />
      <path
        fill-rule="evenodd"
        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
      />
    </svg>
  );
  return (
    <>
      <Navbar bg="light" variant="light" className="nav-style largeScreenNav">
        <Container className="container-fluid ">
          <Nav className="me-auto mt-3">
            <Link to="/" className="link">
              <div className="nav-brand">
                <h4>WebImg</h4>
              </div>
            </Link>

            <Nav.Link className="">
              <Link to="/" className="link">
                <p className="">Home</p>
              </Link>
            </Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Graphics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Backgrounds</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto mt-3">
            {user ? (
              <>
                <Nav.Link>
                  <Link to="/shoppingCart" className="link">
                    <p className="">Cart</p>
                  </Link>
                </Nav.Link>
                <NavDropdown title="Account" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/profile" className="link">
                      View Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Nav.Link>
                <Link to="/signin" className="link">
                  Sign In{" "}
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default LargeScreensNavBar;
