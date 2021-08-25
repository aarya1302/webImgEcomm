import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import "../style/authForm.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const AuthForm = ({ isLogin, handleSubmit, err }) => {
  const [error, setErr] = useState();
  useEffect(
    function onUpdate() {
      if (err === "Request failed with status code 400") {
        setErr("Invalid Email or Password");
        return;
      }
      setErr(err);
    },
    [err]
  );
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
        <br></br>
        <h6 className="text-center text-danger"> {error}</h6>
      </div>
    </div>
  );
};
export default AuthForm;
