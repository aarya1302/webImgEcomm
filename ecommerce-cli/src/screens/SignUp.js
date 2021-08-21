import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { signUpAction } from "../actions/authenticationActions";
import AuthForm from "../components/AuthForm";
const SignUp = () => {
  const [err, setErr] = useState();
  const [message, setMessage] = useState("");
  var dispatch = useDispatch();
  var getUser = useSelector((state) => state.signUp);
  var { loading, error, response } = getUser;
  useEffect(
    function onUpdate() {
      if (error === "Request failed with status code 409") {
        setErr("Email already exists in database");
      } else {
        setErr("");
      }
      if (response) {
        if (response.status === 201) {
          setMessage("Account succesfully created! Redirecting to Login Page");
          setTimeout(function () {
            window.location.replace("signin");
          }, 3000);
        }
      }
    },
    [error, response]
  );
  var handleSignUp = (e) => {
    e.preventDefault();
    var email = e.currentTarget.email.value;
    var pwd = e.currentTarget.password.value;
    var rpwd = e.currentTarget.rpassword.value;

    if (pwd === rpwd) dispatch(signUpAction(email, pwd));
    else setErr("Passwords are different");
  };
  return (
    <>
      {message && (
        <div class="alert alert-success text-center" role="alert">
          {message}
        </div>
      )}
      <AuthForm
        err={err}
        handleSubmit={handleSignUp}
        isLogin={false}
      ></AuthForm>
    </>
  );
};

export default SignUp;
