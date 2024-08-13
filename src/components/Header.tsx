import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
