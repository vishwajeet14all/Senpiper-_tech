import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div>
      <div className="header">
        <div className="tabs">
          <div className={location.pathname === "/" ? "tab active-tab" : "tab"}>
            <Link className="link" to="/">Form</Link>
          </div>
          <div className={location.pathname === "/table" ? "tab active-tab" : "tab"}>
            <Link className="link" to="/table">Table</Link>
          </div>
        </div>
        <div className={location.pathname === "/table" ? "logo logo-table" : "logo"}>
          <h1>F&G</h1>
        </div>
      </div>
    </div>
  );
}

