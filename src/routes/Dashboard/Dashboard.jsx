import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";

import DashboardNav from '../../components/DashboardNav/DashoboardNav'

export default function Dashboard() {
  return (
    <>
    <DashboardNav/>
    <section className="flex justify-center items-center h-full">
        <h1>Dashboard</h1>
    </section>
    </>
  )
}
