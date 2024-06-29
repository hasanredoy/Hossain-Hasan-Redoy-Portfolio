
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

const { default: useAxios } = require("@/Hooks/useAxios")
const { default: axios } = require("axios")

// get axios hook 
const axiosHook = useAxios()

const Skills = () => {
  // load skills using tanstack
  const {data:skills=[],isFetching}=useQuery({
    queryKey:['skills'],
    queryFn:async()=>{
     const res =await axiosHook.get("/api/skills")
      console.log(res.data);
      return res.data.result
    }
  }) 
  
  return (
    <div className=" my-40">
      <h1 className=" text-3xl lg:text-5xl text-center border-b-2 border-gray-400 shadow-lg shadow-gray-400 font-black w-60 mx-auto">My Skills</h1>

      <h4 className=" text-lg mt-8 lg:text-xl font-bold text-center ">Here are the technologies I work with.</h4>

      {isFetching&&<LoadingSpinner></LoadingSpinner>}
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-10 gap-10 w-[80%] lg:w-[60%] mx-auto">{
       isFetching||skills?.map(skill=><div className=" shadow-xl rounded-xl shadow-gray-400 " data-title={skill?.title} key={skill._id}>
           <Image   className=" bg-[#050505] text-white w-full h-full p-5 rounded-xl" src={skill.icon} width={80} height={80} alt={skill?.title}></Image>
        </div>)
        }</div>
    </div>
  );
};

export default Skills;