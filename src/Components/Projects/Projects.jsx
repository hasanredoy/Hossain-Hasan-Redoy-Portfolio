"use client";

import useAxios from "@/Hooks/useAxios";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs,Autoplay, Pagination } from 'swiper/modules';
// import projects css 
import './projects.css';


const axiosHook = useAxios();

const Projects = () => {

  // swiper state 
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(thumbsSwiper);
  
  // loading state 
  const [isProjectsLoading, setProjectsLoading]=useState(true)
  // load projects 
  const [projects,setProjects]=useState([]) 
  useEffect(()=>{
    setProjectsLoading(true)
    fetch("/projects.json")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setProjects(data)
      setProjectsLoading(false)
    })
  },[])

  const sortedProjects = projects?.sort((project1,project2)=>project1?.projectId-project2?.projectId)
console.log(sortedProjects);
  return (
    <div className=" mt-32 ">
      {/* text div  */}
      <div className=" mb-10">
        <h1 className=" border-b-2 border-gray-900 mb-10 w-56 mx-auto text-2xl lg:text-3xl font-black text-center shadow-lg shadow-slate-400 pb-1 px-2">
          My Projects
        </h1>
      </div>
      {/* projects div  */}
      {isProjectsLoading&&<LoadingSpinner></LoadingSpinner>}
      <div className=" ">
{/* swiper  */}

      <Swiper 
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
      >
     {isProjectsLoading||sortedProjects?.map((project,index) => {
          return (
                 <SwiperSlide
                  onClick={setThumbsSwiper}
                 key={index} className={` pb-5 flex    gap-10 border-b shadow-lg shadow-stone-500 flex-col   p-3 rounded-lg bg-gray-50  h-full  justify-start mb-2`}>
              {/* image div  */}
              <div className="">
                <Image className=" w-[90%] md:w-[80%] lg:w-[60%] mx-auto" width={500} height={700} src={project?.image} alt={project?.title}></Image>
              </div>
              {/* text div */}
              <div className=" flex-1 text-start justify-start px-10">
                <h1 className=" text-xl md:text-2xl font-bold">{project?.title}</h1>
                <p className=" my-5 text-sm md:text-base">{project?.description}</p>
                {/* feature div  */}
                <div className=" my-5">
                  <h3 className=" text-xl font-bold">Features</h3>
                  <ul>{project.features?.map(feature=><li className=" text-sm lg:text-base list-disc ml-8 " key={feature}>
                    {feature}
                  </li>)}</ul>
                </div>
              {/* technologies div  */}
              <h3 className=" text-xl font-bold mb-5">Techs I used</h3>
                <div className=" grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7  gap-y-2 lg:gap-y-5  gap-x-3 ">
                  {project?.techs?.map(tech=>{
                    return <div key={tech}>
                      <h3 className=" bg-[#575550] text-white text-sm p-1 text-center  rounded-md w-full ">{tech}</h3>
                    </div>
                  })}
                </div>

                {/* links div  */}
                <hr className=" my-5" />
                <div>
                  <h3 className=" text-xl font-bold my-5"> Please Visit </h3>
                  <div className=" grid grid-cols-2  text-center  md:grid-cols-3 justify-center gap-3 w-full lg:w-[60%]  lg:gap-4 ">
                  <Link href={project?.live?project.live:''} target="_blank">
                  <button className="  flex gap-2 md:gap-5 items-center Btn-Primary">Live Site <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></button></Link>
                  <Link href={project?.clientRepo?project?.clientRepo:""} target="_blank">
                  <button className=" flex gap-5 items-center Btn-Secondary"><FaGithub className=" text-2xl"></FaGithub> Client</button>
                  </Link>
                  <Link href={project?project?.serverRepo?project?.serverRepo:project?.clientRepo:''} target="_blank">
                  <button className=" flex gap-5 items-center Btn-Secondary"><FaGithub className=" text-2xl"></FaGithub> Server</button>
                  
                  </Link>
                  </div>
                </div>


              </div>
            </SwiperSlide>
          );
        })}
     
      </Swiper>

  



        
      </div>
    </div>
  );
};

export default Projects;
