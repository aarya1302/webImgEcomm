import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProfileSideBar from "../components/profileSideBar";

import "../style/profile.css";
import SelectCountry from "../components/selectCountry";
import SelectCountryCode from "../components/selectCountryCode";
const Profile = () => {
  var validated = false;
  return (
    <div className="row">
      <div className="col-md-2 sideBarContainer">
        <div className="sideBar">
          <ProfileSideBar></ProfileSideBar>
        </div>
      </div>
      <div className="container " id="profile">
        <div className="container">
          <br></br>
          <h3 className="text-muted">Profile Information</h3>
          <br></br>
          <Form noValidate validated={validated} className="container">
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                <Form.Label>Phone Number</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    <SelectCountryCode></SelectCountryCode>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="formGridState">
                <Form.Label>Country</Form.Label>
                <br></br>
                <SelectCountry></SelectCountry>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
        <br></br>

        <div className="container" id="detaisl">
          <br></br>
          <h3 className="text-muted">User Details</h3>
          <br></br>
          <>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                https://example.com/users/
              </InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>With textarea</InputGroup.Text>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </>
        </div>
      </div>
    </div>
  );
};
export default Profile;
