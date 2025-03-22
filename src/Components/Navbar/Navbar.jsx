"use client"

import Link from 'next/link';
import React, {  useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
// state for color control of navlinks 
const [currentNav,setCurrentNav]= useState("")

// state for small device navlinks 
const [showLinks,setShowLinks]= useState(false)
// console.log(currentNav);

  // all navigation links 
  const navLinks = [
  
    {
      title:"About",
      to:"#about"
    },
    {
      title:"Skills",
      to:"#skills"
    },
    {
      title:"Projects",
      to:"#projects"
    },
    {
      title:"Contact",
      to:"#contactMe"
    },
  ]


  return (
    <nav className='  bg-gray-100 bg-opacity-60 h-16 flex items-center'>
      <div className='scroll '></div>
      <div  className=' w-[95%] lg:w-[85%] mx-auto flex justify-between'>
        {/* logo  */}
     <div>
     <h1 className=' hover:scale-105 cursor-pointer w-36 text-2xl font-bold gap-x-0 relative '><span className='  '>H</span> H {" "}
       <span className='pr-1 '>{"Redo"}</span>
        <span className=' top-2.5 right-5 text-4xl absolute'>{"`"}</span>
        <span className='  absolute text-[#f98407] top-2 rotate-6 right-3.5'>{"/"}</span>
        </h1>
     </div>
        
        <div>
          {/* links sm  */}
          <div className=' block md:hidden'>
            <button onClick={()=>setShowLinks(!showLinks)} ><GiHamburgerMenu className=' text-2xl'></GiHamburgerMenu></button>
           {
            showLinks&& <ul className=' absolute top-16 border border-gray-400 rounded-md right-3 items-center shadow-2xl z-50 justify-center w-36 py-2 flex flex-col bg-slate-100 gap-5  '>
            {/* render all links by map  */}
            {navLinks?.map((links)=>(
              <Link key={links.to} className={`font-bold text-lg hover:scale-105 hover:text-[#f98407]`} href={links.to||''}
             
              ><button
               onClick={()=>setCurrentNav(links.to)}
               >{links.title}</button>
              </Link>
            ))}
          </ul>
           }
          </div>
        {/* links lg */}
        <div className=' hidden md:flex'>
          <ul className=' flex gap-5  '>
            {/* render all links by map  */}
            {navLinks?.map((links)=>(
              <Link key={links.to||''} className={`font-bold text-lg hover:scale-105 hover:text-[#f98407]`} href={links.to}
             
              ><button onClick={()=>setCurrentNav(links.to)}>{links.title}</button>
              </Link>
            ))}
          </ul>
        </div>
        </div>
        </div> 
    </nav>
  );
};

export default Navbar;