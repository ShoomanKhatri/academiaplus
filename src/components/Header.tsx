import React from 'react';
import Link from 'next/link';
import { FaBell, FaChevronDown } from 'react-icons/fa';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      {/* Dynamic Title */}
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      {/* Right Side: User Info and Actions */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <FaBell className="h-6 w-6" />
        </button>

        <div className="relative">
          <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
            <span className="ml-2">John Doe</span>
            <FaChevronDown className="ml-1 h-5 w-5" />
          </button>

          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
            <Link
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <Link
              href="/logout"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
