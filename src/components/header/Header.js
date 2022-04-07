import React from "react";
import UserMenu from "../user-menu/UserMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header--color">
      <div className="header container">
        <Link to="/">
          <h1 className="logo">Awesome Kanban Board</h1>
        </Link>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
