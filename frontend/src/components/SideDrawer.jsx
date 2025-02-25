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
      className={`fixed top-0 left-0 h-full w-80 bg-base-200 transition-transform duration-300 ease-in-out ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-2">
        {isDrawerOpen && (
          <button onClick={() => setIsDrawerOpen(false)} className="btn btn-ghost btn-circle mb-4">
            {navIcon}
          </button>
        )}
        <ul className="menu text-base-content">
          <li><a>Chat</a></li>
          <li><a>Projects</a></li>
          <li><a>Today</a></li>
          <li><a>Previous</a></li>  {/* dynamically add previous chats */}
        </ul>
      </div>
    </div>
  );
}

export default SideDrawer;