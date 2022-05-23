import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      {/* wrong link implementation. full reload here for every click. must use routing to for correct SPA creation 
       ALL the componenets are part of the bundle and are loaded when the app loads
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/products">Products</a> 
      </li>
      <li>
        <a href="/posts/2018/06">Posts</a>
      </li>
      <li>
        <a href="/admin">Admin</a>
      </li>
      */}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
