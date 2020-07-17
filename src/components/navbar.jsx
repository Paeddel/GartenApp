import React, { Component } from "react";

const Navbar = ({ totalCounters, totalItems }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand h1">
        Items
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}
        </span>
      </span>
      <span className="navbar-brand h1">
        Total Items
        <span className="badge badge-pill badge-secondary m-2">
          {totalItems}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
