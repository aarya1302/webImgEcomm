import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./header.js";

function Layout(props) {
  const [userInfo, setUser] = useState();
  var getUser = useSelector((store) => store.user);
  var cart = useSelector((store) => store.cart);
  var { user, loading, error } = getUser;
  useEffect(
    function onUpdate() {
      setUser(user);
    },
    [getUser]
  );
  return (
    <>
      <head>
        <title>WebImg</title>
      </head>
      <Header user={user}></Header>

      <main className="container-fluid">
        <div>{props.children}</div>
      </main>
    </>
  );
}

export default Layout;
