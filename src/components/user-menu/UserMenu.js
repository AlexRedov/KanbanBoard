import React, { useState } from "react";
import userPic from "./user-avatar.png";
import arrow from "./arrow.png";

const UserMenu = () => {
  
  /* User menu state */
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="user-menu" onClick={handleClick}>
      <div className="user-menu__pic-and-arrow">
        <img className="user-menu__userpic" src={userPic} />
        <img
          className={
            isClicked
              ? "user-menu__arrow user-menu__arrow--rotated"
              : "user-menu__arrow"
          }
          src={arrow}
          alt="Dropdown arrow"
        />
      </div>
      {isClicked && (
        <>
          <div className="user-menu__dropdown__little-arrow"></div>
          <ul className="user-menu__dropdown">
            <li className="user-menu__dropdown-el">My Profile</li>
            <li className="user-menu__dropdown-el">Log Out</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default UserMenu;
