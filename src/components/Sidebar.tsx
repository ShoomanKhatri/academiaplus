import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full flex flex-col p-6">
      <h2 className="text-2xl font-semibold mb-8">AcademiaPlus</h2>
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="text-lg text-gray-300 hover:text-white">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/attendance" className="text-lg text-gray-300 hover:text-white">
              Attendance
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/routine" className="text-lg text-gray-300 hover:text-white">
              Routine
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/marks" className="text-lg text-gray-300 hover:text-white">
              Marks
            </Link>
          </li>
        </ul>
      </nav>
      <footer className="text-gray-400">
        © 2024 AcademiaPlus
      </footer>
    </div>
  );
};

export default Sidebar;
