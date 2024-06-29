"use client";

import useAxios from "@/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

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
    <div className=" my-20">
      {/* text div  */}
      <div>
        <h1 className=" text-5xl font-bold w-80 text-center border-b-2 shadow-xl shadow-green-200 mx-auto">
          My Projects
        </h1>
      </div>
      {/* projects div  */}
      <div>
        {projects?.map((project) => (
          <div>
            {/* image div  */}
            <div>
              <Image width={500} height={500} src={project?.image} alt={project?.title}></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
