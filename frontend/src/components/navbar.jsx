import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Side drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-base-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="menu p-4 text-base-content">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>

      {/* Main content */}
      <div className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-80' : 'translate-x-0'}`}>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
