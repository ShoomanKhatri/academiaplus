import React, { useState } from 'react';
import Layout from './Layout';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Teacher',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Profile Updated:', profile);
    // Update profile in the backend
  };

  return (
    <Layout>
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
            disabled
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Update Profile
        </button>
      </div>
    </Layout>
  );
};

export default ProfilePage;
