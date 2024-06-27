"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
// state for color control of navlinks 
const [currentNav,setCurrentNav]= useState("")
console.log(currentNav);

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
      to:"#contact"
    },
  ]
  return (
    <nav className='  bg-gradient-to-t from-slate-200 via-stone-200 to-gray-200 h-16 flex items-center'>
      <div  className=' container max-w-7xl mx-auto flex justify-between'>
        {/* logo  */}
     <div>
     <h1 className=' w-36 text-2xl font-bold gap-x-0 relative '><span className='  '>H</span> H {" "}
       <span className='pr-3 text-green-600 '>{"Redo"}</span>
        <span className=' text-yellow-500 top-0.5 right-5 text-4xl absolute'>{"`"}</span>
        <span className=' text-green-600'>{"/"}</span>
        </h1>
     </div>
        {/* links  */}
        <div>
          <ul className=' flex gap-5 '>
            {/* render all links by map  */}
            {navLinks?.map((links)=>(
              <Link key={links.to} className={`font-bold text-lg ${links.to == currentNav&&"text-green-500"} `} href={links.to}
             
              ><button onClick={()=>setCurrentNav(links.to)}>{links.title}</button>
              </Link>
            ))}
          </ul>
        </div>
        </div> 
    </nav>
  );
};

export default Navbar;