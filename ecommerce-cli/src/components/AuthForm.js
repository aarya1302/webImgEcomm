import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import "../authForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const AuthForm = ({ isLogin, handleSubmit, err }) => {
  return (
    <div className="container-fluid center  contain">
      <div className="container contain-login ">
        <h1 className="text-center text-primary">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <hr></hr>
        <Form className="" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              id="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          {!isLogin ? (
            <>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repeat Password"
                  name="rpassword"
                />
              </Form.Group>
              <div className="buttons">
                <Link to="/signin">I already have an account</Link>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </>
          ) : (
            <div className="buttons">
              <Link to="/signup">I don't have an account</Link>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          )}
        </Form>
        {err}
      </div>
    </div>
  );
};
export default AuthForm;
