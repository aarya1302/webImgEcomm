import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../actions/authenticationActions";
import AuthForm from "../components/AuthForm";
const SignIn = ({ user, error }) => {
  var dispatch = useDispatch();
  useEffect(
    function onUpdate() {
      if (user) {
        window.location.replace("/");
      }
    },
    [dispatch, user, error]
  );
  var handleSignIn = (e) => {
    e.preventDefault();
    dispatch(
      signInAction(e.currentTarget.email.value, e.currentTarget.password.value)
    );
  };
  return (
    <AuthForm err={error} handleSubmit={handleSignIn} isLogin={true}></AuthForm>
  );
};

export default SignIn;
