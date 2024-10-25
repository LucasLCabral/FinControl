import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/logo/fincontrol-logo.svg';
import Notification from '../../components/Notification/Notification';
import { useState, useEffect } from 'react';
import './nav.css';

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    setIsLoggedIn(!!user); // Update login status based on session
  }, []);

  const handleDashboardClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Prevent navigation
      setShowNotification(true); // Show the notification
    }
  };

  const closeNotification = () => setShowNotification(false);

  return (
    <header className='max-w-xl mx-auto pt-10'>
      <nav className="flex justify-around py-3 bg-gradient-to-t from-zinc-100 to-white rounded-[50px]">
        <div className='flex justify-center items-center'>
          <Link to={'/dashboard'} onClick={handleDashboardClick}>
            <p className='text-2xl font-medium text-zinc-500 hover:text-zinc-600 duration-200'>
              <MdDashboard/>
            </p>
          </Link>
        </div>

        <div className='w-12 logo-nav'>
          <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <Link to={'/login'}>
            <FaUser className="text-2xl text-zinc-500 hover:text-zinc-600 duration-200" />
          </Link>
        </div>
      </nav>

      {/* Notification message */}
      {showNotification && (
        <Notification 
          message="Please log in to access the dashboard."
          onClose={closeNotification}
          type="error" 
        />
      )}
    </header>
  );
}
