import { useState } from "react";
import Nav from "react-bootstrap/Nav";

const ProfileSideBar = ({ setSideBarOpen }) => {
  const [active, setActive] = useState("Profile");
  var changeActive = (item_name) => {
    setActive(item_name);
  };
  var sideBarNames = ["Profile", "Payment", "Purchased"];
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
      <ul class="list-unstyled  list">
        <button
          className="btn remove-side-bar close"
          onClick={() => {
            setSideBarOpen(false);
          }}
        >
          <li style={{ border: "0px " }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </li>
        </button>
        <br></br>

        <br></br>

        {sideBarItems}
      </ul>
    </div>
  );
};
export default ProfileSideBar;
