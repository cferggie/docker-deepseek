import React from 'react';

const navIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h7"
    />
  </svg>
);


function SideDrawer({ isDrawerOpen, setIsDrawerOpen }) {
  return (
    <div 
      className={`bg-base-200 transition-all duration-300 ease-in-out ${
        isDrawerOpen ? 'w-80' : 'w-0'
      } overflow-hidden`}
    >
      <div className="p-2 top-0">
        {isDrawerOpen && (
          <button onClick={() => setIsDrawerOpen(false)} className="btn btn-ghost btn-circle mb-4">
            {navIcon}
          </button>
        )}
        <ul className="menu text-base-content">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
  );
}

export default SideDrawer;