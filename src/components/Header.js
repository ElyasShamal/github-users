import React from "react";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <h1 className="title">
        Github Users
        <span>
          <FaGithub className="github-icon" />
        </span>
      </h1>
    </div>
  );
}

export default Header;
