import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';
import { RiHomeFill } from 'react-icons/ri'

import { categories } from '../utils/data.js';
import Logo from '../assets/Llogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className=" flex flex-col justify-between bg-stone-200 h-full overflow-y-scroll min-w-210  hide-scrollbar ">
      <div className="flex flex-col">
        <Link
          to=" /"
          className="flex px-5 gap-2 -my-8 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={Logo} alt="logo" className="w-full " />
        </Link>
        <div className=" flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className="mt-1 px-5 text-base 2xl:text-xl">Discover cateogries</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img src={category.image} className="w-8 h-8 rounded-full shadow-lg"  alt="category" />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className ="px-5 mt-10 justify-center items-center ">
            <h5 className=" flex ml-2 items-center justify-center ">MagniFique by Rohan</h5>
      <div className ="flex justify-center">


          <a href="https://twitter.com/Rohan_Singh2003" className ="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1  text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>

          <a href="https://www.linkedin.com/in/rohan-singh-a783541b5/" className ="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600" >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
         
         
          <a href="https://github.com/rohan-singh987" className ="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-gray-600 hover:border-gray-600" >
          <FontAwesomeIcon icon={['fab', 'github']} />    
          </a>
          
          <a href="https://www.facebook.com" className ="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
         </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-xl mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
          <p>{user.userName}</p>
          <IoIosArrowForward />
        </Link>
      )}

    </div>
  )
}

export default Sidebar
