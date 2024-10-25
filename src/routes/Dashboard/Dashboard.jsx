import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";
import DashboardNav from '../../components/DashboardNav/DashboardNav'; // Fixed the typo here
import './dashboard.css'

export default function Dashboard() {
  const user = JSON.parse(sessionStorage.getItem('user')); // Retrieve user from sessionStorage
  const userName = user ? user.name : 'User'; // Get the name or fallback to 'User'

  return (
    <div className="dashboard-layout"> {/* Parent container for layout */}
      <DashboardNav className='ml-10'/>
      <section className="dashboard-content bg-zinc-100 rounded-lg"> {/* Content section */}
        <h1 className="font-bold text-3xl">Hello, {userName}!</h1>
      </section>
    </div>
  );
}
