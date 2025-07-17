import React from 'react'
import { Link } from 'react-router-dom'
import { Home, CalendarSearch } from 'lucide-react'

const Navbar = () => {
  return (
    <nav>
      <ul className='sticky top-0 flex justify-between items-center px-5 p-3'>
        <span className='text-xl font-bold cursor-default'>Eventivate</span>
        <Link to='/' className='font-light hover:font-medium flex items-center'><Home className='w-10 h-5'/> Home</Link>
        <Link to='/events' className='font-light hover:font-medium flex items-center'><CalendarSearch className='w-10 h-5'/> Events</Link>
      </ul>
    </nav>
  )
}

export default Navbar
