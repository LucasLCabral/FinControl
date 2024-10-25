import { useEffect } from 'react';

const Notification = ({ message, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(onClose, 30000000000); // Automatically close after 3 seconds
//     return () => clearTimeout(timer);
//   }, [onClose]);

  return (
    <div className="fixed top-4 left-4 bg-green-500 text-white p-4 rounded shadow-lg transition-transform transform">
      {message}
    </div>
  );
};

export default Notification