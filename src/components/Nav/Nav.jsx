import { FaUser } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";

import Logo from '../../assets/logo/fincontrol-logo.svg'

import { Link } from 'react-router-dom'

import './nav.css'

export default function Nav() {
  return (
    <header className='max-w-3xl mx-auto p-5'>
      <nav className="flex justify-around py-3 bg-gradient-to-t from-zinc-100 to-white rounded-[50px]">
        <div className='flex justify-center items-center'>
            <Link><p className='text-xl font-medium text-zinc-500 hover:text-zinc-600 duration-200'>Dashboard</p></Link>
        </div>

        <div className='w-12 logo-nav'>
            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
        </div>

        <div className="flex gap-5 justify-center items-center">
            <Link to={'/login'}>
                <FaUser className="text-2xl text-zinc-500 hover:text-zinc-600 duration-200" />
            </Link>
            <CgDarkMode className="text-3xl text-zinc-500 hover:text-zinc-600 duration-200 cursor-pointer"/>
        </div>
    </nav>
  </header>

  )
}
