import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io'

const Navbar = ({ searchTerm, setSearchTerm, user  }) => {

    const navigate = useNavigate();

    if(!user) return null;

    return (
        <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 bg-gradient-to-r from-[#c5b6e6] via-[#D6E5FA] to-[#baabdaaa]	">
            <div className="flex justify-center items-center w-full px-5 rounded-xl bg-[#FFBC97] border-none outline-none focus-within:shadow-md ">
                <input
                  type="text"
                  onChange = {(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  value={searchTerm}
                  onFocus={() => navigate('/search')}
                  className="p-2 w-full bg-[#FFFCDC] outline-none placeholder-grey  rounded-lg"
                />
                <IoMdSearch fontSize={21} className="ml-1" />
            </div>
            <div className="flex gap-3">
              <Link to={`user.profile/${user?._id}`} className="hidden md:block" >
                <img src={user.image} alt="user" className=" w-12  h-10 rounded-xl " />
              </Link>
              <Link to='create-pin' className=" bg-[#676FA3] text-white rounded-lg w-12 md:w-11 md:h-10 flex justify-center items-center" >
                <IoMdAdd fontSize={25} />
              </Link>
            </div>
        </div>
    )
}

export default Navbar
