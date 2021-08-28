import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProfileSideBar from "../components/profileSideBar";

import "../style/profile/profile.css";
import SelectCountry from "../components/selectCountry";
import SelectCountryCode from "../components/selectCountryCode";
import PaymentForm from "../components/paymentForm";
import { useEffect, useState } from "react";
import $ from "jquery";
const Profile = ({ user, sideBarOpenSetting }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  if (!sideBarOpen) {
    $(".side-container").removeClass("move-in-side-bar");
    $(".side-container").addClass("move-out-side-bar");
  } else {
    $(".side-container").removeClass("move-out-side-bar");
    $(".side-container").addClass("move-in-side-bar");
  }
  useEffect(function onUpdate() {
    if (!user) {
      window.location.replace("/");
    }
  });
  var validated = false;
  return (
    <>
      {user && (
        <div className="padding-top-prevent-cut-off">
          <div className="side-container">
            <br></br>
            {!sideBarOpen && (
              <button
                className="btn remove-side-bar close"
                onClick={() => {
                  setSideBarOpen(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-list list-side-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            )}
            <div id="sideBarContainer" className="sideBarContainer">
              <div className="sideBar">
                <ProfileSideBar
                  setSideBarOpen={setSideBarOpen}
                ></ProfileSideBar>
              </div>
            </div>
          </div>

          <div className="container-fluid " id="profile">
            <div className="container profile-body">
              <div className="container-fluid  middle mb-5">
                <div>
                  <br></br>
                  <div class=" mx-auto text-center">
                    <h1>Profile Information</h1>
                  </div>
                  <br></br>
                  <br></br>
                  <Form noValidate validated={validated} className="container">
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last name"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            @
                          </InputGroup.Text>
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
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustomUsername"
                      >
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
              </div>
              <br></br>
              <PaymentForm></PaymentForm>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
