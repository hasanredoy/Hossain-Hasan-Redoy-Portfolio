"use client";

import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
        <h1 className=" text-5xl font-bold w-80 text-center border-b-2 shadow-xl shadow-stone-500 mx-auto">
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
                <h1 className=" text-2xl font-bold">{project?.title}</h1>
                <p className=" my-5 text-lg">{project?.description}</p>
                {/* feature div  */}
                <div className=" my-5">
                  <h3 className=" text-xl font-bold">Features</h3>
                  <ul>{project.features?.map(feature=><li className=" list-disc ml-8 " key={feature}>
                    {feature}
                  </li>)}</ul>
                </div>
              {/* skills div  */}
                <div className=" grid grid-cols-4  gap-2">
                  {project?.techs?.map(tech=>{
                    return <div key={tech}>
                      <button className=" bg-stone-900 text-white font-bold  py-2 px-5 rounded-md w-full ">{tech}</button>
                    </div>
                  })}
                </div>

                {/* links div  */}


              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
