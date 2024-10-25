import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { RiBarChartBoxLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { RxExit } from "react-icons/rx";

import Loading from '../../components/Loading/Loading';
import Logo from '../../assets/logo/fincontrol-logo.svg';
import './dashboardnav.css';

export default function DashboardNav() {

    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = () => {
      setIsLoggingOut(true);
      setTimeout(() => {
        sessionStorage.removeItem('user'); // Clear user session
        window.location.href = '/'; // Redirect to home after logout
      }, 2000);
    };

  return (
    <section>
        <aside className='dashboard-nav py-5 px-2'>
          <div className='logo ml-1'>
            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
          </div>
          <div className='nav-links text-3xl content-nav'>
            <Link to={'/dashboard'} className='nav-link text-zinc-500 hover:text-zinc-600 duration-200'>
              <MdDashboard className='icon' />
            </Link>
            <Link to={'/dashboard/chart'} className='nav-link text-zinc-500 hover:text-zinc-600 duration-200'>
              <RiBarChartBoxLine className='icon' />
            </Link>
            <Link to={'/dashboard/wallet'} className='nav-link text-zinc-500 hover:text-zinc-600 duration-200'>
              <IoWallet className='icon' />
            </Link>
          </div>

          <div className='nav-links text-3xl content-nav'>
            <Link to={'/dashboard/config'} className='nav-link text-zinc-500 hover:text-zinc-600 duration-200'>
              <FaGear className='icon' />
            </Link>
            <Link to={'/dashboard/notifications'} className='nav-link text-zinc-500 hover:text-zinc-600 duration-200'>
              <IoMdNotifications className='icon' />
            </Link>
          </div>

          <div className='nav-links text-3xl content-nav'>
            <button onClick={handleLogout} className='nav-link text-zinc-500 hover:text-zinc-600 duration-200'>
              <RxExit className='icon' />
            </button>
          </div>

          {isLoggingOut && <Loading title="Bye FinFriend!" message="Disconnecting account..." />}
        </aside>
    </section>
  );
}
