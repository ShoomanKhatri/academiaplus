import React from 'react';
import Layout from '../components/Layout';

const notifications = [
  { id: 1, message: 'New attendance policy updated.', type: 'info' },
  { id: 2, message: 'Your profile has been updated.', type: 'success' },
  { id: 3, message: 'Routine for BCA Semester 1 has been changed.', type: 'warning' },
];

const NotificationsPage = () => {
  return (
    <Layout>
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className={`mb-4 p-4 rounded-md ${getNotificationClass(notification.type)}`}>
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const getNotificationClass = (type: string) => {
  switch (type) {
    case 'info':
      return 'bg-blue-100 text-blue-700';
    case 'success':
      return 'bg-green-100 text-green-700';
    case 'warning':
      return 'bg-yellow-100 text-yellow-700';
    case 'error':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default NotificationsPage;
