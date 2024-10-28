import { PiEye, PiEyeClosed } from "react-icons/pi";
import { Outlet } from 'react-router-dom'; // Import Outlet
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import './dashboard.css';

export default function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const userName = user ? user.name : 'User';

  return (
    <section className="py-10">
      <div className="dashboard-layout">
        <DashboardNav className='ml-10' />
        <section className="dashboard-content bg-zinc-100 rounded-lg">
          <h1 className="font-bold text-3xl">Hello, {userName}!</h1>
          <Outlet /> {/* This will render the nested route's component */}
        </section>
      </div>
    </section>
  );
}
