import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">👤 Profile</h1>
      <p className="mt-4 text-gray-300">Name: {user?.name}</p>
      <p className="text-gray-300">Email: {user?.email}</p>
    </div>
  );
};

export default Profile;