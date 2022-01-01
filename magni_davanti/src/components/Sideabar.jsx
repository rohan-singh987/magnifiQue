import React from 'react'
import { NavLink, Link } from 'react-router-dom'


import Logo from '../assets/Llogo.png'

const Sideabar = ({ user, closeToggle }) => {

    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(false);
    }

    return (
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210  hide-scrollbar ">
           <div className="flex flex-col">
            <Link 
              to='/'
              className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
              onClick = {handleCloseSidebar}
            />
            <img src={Logo} alt="logo" className="w-full" />
           </div>
        </div>
    )
}

export default Sideabar
