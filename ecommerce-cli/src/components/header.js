import { useEffect, useState } from "react";

import "../../src/style/header.css";
import $ from "jquery";
import LargeScreensNavBar from "./navBar/largeScreensNavBar";
import MobileNavBar from "./navBar/mobileNavBar";
var Header = ({ user, cart }, props) => {
  const [width, setWidth] = useState($(window).width());
  var widthVal = $(window).width();

  return (
    <>
      <LargeScreensNavBar cart={cart} user={user}></LargeScreensNavBar>
      <MobileNavBar cart={cart} user={user}></MobileNavBar>
    </>
  );
};
export default Header;
