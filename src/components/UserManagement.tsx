import React from 'react';
import Layout from './Layout';

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Teacher' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'CR' },
];

const UserManagementPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-4 flex justify-between items-center">
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.role}</span>
              <div>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 ml-2">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Add New User
        </button>
      </div>
    </Layout>
  );
};

export default UserManagementPage;
