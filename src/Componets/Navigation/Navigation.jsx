import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <h1 className="navigation__logo">MY NOTES</h1>
      <div className="navigation__m">
        <p className="navigation__menuItem">Notes</p>
        <p className="navigation__menuItem">About</p>
      </div>
    </div>
  );
}

export default Navigation;
