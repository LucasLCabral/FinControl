import React, { useEffect } from 'react';

const Notification = ({ message, onClose, type }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000); // Automatically close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className={`fixed top-32 right-48 ${bgColor} text-white p-4 rounded shadow-lg transition-transform transform z-[999]`}>
      {message}
    </div>
  );
};

export default Notification;
