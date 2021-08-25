import { useEffect } from "react";
import HomeScreenItems from "../components/homeScreenItems";

var Home = ({ something, user }, props) => {
  // eslint-disable-next-line no-unused-expressions
  console.log(user);
  console.log(something);

  return (
    <>
      {something}
      <HomeScreenItems></HomeScreenItems>
    </>
  );
};
export default Home;
