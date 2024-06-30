"use client";

import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const axiosHook = useAxios();
const Projects = () => {
  // load projects using tanstack
  const { data: projects = [], isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosHook.get("/api/projects");
      console.log(res.data);
      return res.data.result;
    },
  });
  console.log(projects);

  return (
    <div className=" my-20 container mx-auto">
      {/* text div  */}
      <div className=" mb-10">
        <h1 className=" text-3xl  font-black w-80 text-center border-b-2 shadow-xl shadow-stone-500 mx-auto">
          My Projects
        </h1>
      </div>
      {/* projects div  */}
      {/* if data is fetching then return loading spinner  */}
      {
        isFetching&&<LoadingSpinner></LoadingSpinner>
      }
      <div className="">
        {isFetching || projects?.map((project,index) => {
          return (
            <div key={index} className={`flex my-20 p-5 gap-10 border-b shadow-xl shadow-stone-500 ${index%2==0?" flex-col lg:flex-row-reverse":" flex-col lg:flex-row"}`}>
              {/* image div  */}
              <div className="flex-1">
                <Image className=" w-full " width={500} height={500} src={project?.image} alt={project?.title}></Image>
              </div>
              {/* text div */}
              <div className=" flex-1">
                <h1 className=" text-xl md:text-2xl font-bold">{project?.title}</h1>
                <p className=" my-5 text-base md:text-lg">{project?.description}</p>
                {/* feature div  */}
                <div className=" my-5">
                  <h3 className=" text-xl font-bold">Features</h3>
                  <ul>{project.features?.map(feature=><li className=" list-disc ml-8 " key={feature}>
                    {feature}
                  </li>)}</ul>
                </div>
              {/* technologies div  */}
              <h3 className=" text-xl font-bold mb-5">Techs I used</h3>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
                  {project?.techs?.map(tech=>{
                    return <div key={tech}>
                      <button className=" bg-stone-900 text-white text-sm lg:text-base font-bold  py-2 px-5 rounded-md w-full ">{tech}</button>
                    </div>
                  })}
                </div>

                {/* links div  */}
                <hr className=" my-5" />
                <div>
                  <h3 className=" text-xl font-bold my-5"> Please Visit </h3>
                  <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 items-center md:pl-14 ">
                  <Link href={project?.live} target="_blank">
                  <button className=" flex gap-5 items-center bg-green-700 text-white font-bold rounded-lg px-3 py-2">Live Site <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></button></Link>
                  <Link href={project?.clientRepo} target="_blank">
                  <button className=" flex gap-5 items-center bg-gray-900 text-white font-bold rounded-lg px-3 py-2"><FaGithub className=" text-2xl"></FaGithub> Client</button>
                  </Link>
                  <Link href={project?.serverRepo?project?.serverRepo:project?.clientRepo} target="_blank">
                  <button className=" flex gap-5 items-center bg-gray-900 text-white font-bold rounded-lg px-3 py-2"><FaGithub className=" text-2xl"></FaGithub> Server</button>
                  
                  </Link>
                  </div>
                </div>


              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
