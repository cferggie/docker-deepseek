import React from 'react';
import { LuTableOfContents } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

function Navbar({ onMenuClick }) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <button onClick={onMenuClick} className="btn btn-ghost btn-circle">
          <LuTableOfContents className="h-5 w-5" />
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          {/* search icon */}
          {/* Maybe this would search the current conversation? */}
          <LuSearch className="h-5 w-5" /> 
        </button>
      </div>
    </div>
  );
}

export default Navbar;
