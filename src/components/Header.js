import React from "react";
import { FaGithub } from "react-icons/fa";
import Input from "./Input";

function Header() {
  return (
    <div className="header">
      <h1 className="title">
        Github Users
        <span>
          <FaGithub className="github-icon" />
        </span>
      </h1>
      <Input />
    </div>
  );
}

export default Header;
