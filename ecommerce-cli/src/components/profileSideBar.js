import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "../style/profile.css";
const ProfileSideBar = () => {
  const [active, setActive] = useState("Profile");
  var changeActive = (item_name) => {
    setActive(item_name);
  };
  var sideBarNames = ["Profile", "Details", "Payement", "Purchased"];
  var sideBarItems = sideBarNames.map((item) => {
    var isButtonActive = item === active ? " text-active " : "";
    var isLiActive = item === active ? " li-active " : "";
    return (
      <li
        className={" list-item text-muted" + isLiActive}
        onClick={() => {
          setActive(item);
        }}
      >
        <a
          href={"#" + item.toLowerCase()}
          className={
            "btn btn-toggle  align-items-center rounded collapsed" +
            isButtonActive
          }
          aria-expanded="true"
        >
          {item}
        </a>
      </li>
    );
  });
  return (
    <div class="flex-shrink-0  bg-white ">
      <ul class="list-unstyled  list">{sideBarItems}</ul>
    </div>
  );
};
export default ProfileSideBar;
