import React from 'react';

const Notification = ({ type, message }) => {
  return (
    <div className={`mx-4 mt-4 p-3 rounded-lg ${
      type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' : 'bg-blue-100 text-blue-800 border border-blue-200'
    }`}>
      {message}
    </div>
  );
};

export default Notification;