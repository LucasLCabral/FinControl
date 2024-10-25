import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";


import Logo from '../../assets/logo/fincontrol-logo.svg'

import { Link } from 'react-router-dom'

import './nav.css'

export default function Nav() {
  return (
    <header className='max-w-xl mx-auto pt-10'>
      <nav className="flex justify-around py-3 bg-gradient-to-t from-zinc-100 to-white rounded-[50px]">
        <div className='flex justify-center items-center'>
            <Link to={'/dashboard'}><p className='text-2xl font-medium text-zinc-500 hover:text-zinc-600 duration-200'><MdDashboard/></p></Link>
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
  </header>

  )
}
