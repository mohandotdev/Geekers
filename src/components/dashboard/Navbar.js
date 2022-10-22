import React from 'react';
import{HiOutlineUserCircle} from 'react-icons/hi';
import {Link} from 'react-router-dom';

export default function navbar()
{
  return( 
      <div className="flex py-2 px-9 font-semibold justify-between items-center bg-[#1C2333] shadow-2xl">
      <div className="flex items-center">
        <Link to ="/">
          <img className = "object-scale-down h-14" src="/logo2.png" alt="Geekers"/>
        </Link>
        <p className="text-gray-300 text-xl px-5 pb-1">ONLINE CODE EDITOR</p>
      </div>
      <ul className="text-white text-l flex items-center">
        <li className="px-4 py-3">Home</li>
        <li className="px-4 py-3">About</li>
        <li className="px-4 py-3">Help</li>
        <div>
          <HiOutlineUserCircle size={30}/>
        </div>
      </ul>
    </div>
    )
}

// bg-[#1C2333]