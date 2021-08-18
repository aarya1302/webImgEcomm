import Header from "./header.js";

function Layout(props) {
  return (
    <>
      <head>
        <title>WebImg</title>
      </head>
      <Header></Header>

      <main className="container-fluid">
        <div>{props.children}</div>
      </main>
    </>
  );
}

export default Layout;
