import React from 'react'
import logo from '../assets/movie-logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex space-x-8 items-center  bg-blackborder-2 pl-3 py-3'>
        <img className = 'w-12'  src={logo} alt="" />
        <Link  className='text-2xl font-semibold text-blue-500'  to="/">Movies</Link>


        <Link className='text-2xl font-semibold text-blue-500' to="/watchlist">WatchList</Link>
    </div>
  )
}

export default Navbar