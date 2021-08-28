import { useEffect } from "react";
import HomeScreenItems from "../components/homeScreenItems";

var Home = ({ something, user }, props) => {
  // eslint-disable-next-line no-unused-expressions

  return (
    <div className="padding-top-prevent-cut-off">
      <HomeScreenItems></HomeScreenItems>
    </div>
  );
};
export default Home;
