import { useDispatch } from "react-redux";
import { signInAction } from "../actions/authenticationActions";
import AuthForm from "../components/AuthForm";
const SignIn = () => {
  var dispatch = useDispatch();
  var handleSignIn = (e) => {
    e.preventDefault();
    dispatch(
      signInAction(e.currentTarget.email.value, e.currentTarget.password.value)
    );
  };
  return <AuthForm handleSubmit={handleSignIn} isLogin={true}></AuthForm>;
};

export default SignIn;
