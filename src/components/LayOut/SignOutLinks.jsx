import React from "react";
import { NavLink } from "react-router-dom";
const SignOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Signup </NavLink>
      </li>
      <li>
        <NavLink to="/">Log In</NavLink>
      </li>
      <li></li>
    </ul>
  );
};

export default SignOutLinks;
