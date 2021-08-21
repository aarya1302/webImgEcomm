import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpAction } from "../actions/authenticationActions";
import AuthForm from "../components/AuthForm";
const SignUp = () => {
  const [err, setErr] = useState("");

  var dispatch = useDispatch();

  var handleSignUp = (e) => {
    e.preventDefault();
    var email = e.currentTarget.email.value;
    var pwd = e.currentTarget.password.value;
    var rpwd = e.currentTarget.rpassword.value;
    if (pwd === rpwd) dispatch(signUpAction(email, pwd));
    else setErr("passwords don't match");
  };
  return (
    <>
      <AuthForm
        err={err}
        handleSubmit={handleSignUp}
        isLogin={false}
      ></AuthForm>
    </>
  );
};

export default SignUp;
