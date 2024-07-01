'use client'
import Image from "next/image"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import { useEffect, useState } from "react"

const { default: useAxios } = require("@/Hooks/useAxios")

// get axios hook 
const axiosHook = useAxios()

const Skills = () => {
// loading state 
const [isSkillsLoading, setSkillsLoading]=useState(false)
  // load skills 
const [skills,setSkills]=useState([]) 
  useEffect(()=>{
    setSkillsLoading(true)
    axiosHook.get("/api/skills")
    .then(res=>{
    const skillsArr = res.data?.result
    console.log(skillsArr);
    setSkills(skillsArr)
    setSkillsLoading(false)
  })
  },[])
  return (
    <div className=" my-40">
      <h1 className=" text-3xl  text-center border-b-2 border-gray-400 shadow-lg shadow-gray-400 font-black w-60 mx-auto">My Skills</h1>

      <h4 className=" text-lg mt-8 lg:text-xl font-bold text-center ">Here are the technologies I work with.</h4>

      {isSkillsLoading&&<LoadingSpinner></LoadingSpinner>}
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-10 gap-10 w-[80%] lg:w-[60%] mx-auto">{isSkillsLoading||skills?.map(skill=><div className=" shadow-xl rounded-xl shadow-gray-400 " data-title={skill?.title} key={skill._id}>
           <Image   className=" bg-[#050505] text-white w-full h-full p-5 rounded-xl" src={skill.icon} width={80} height={80} alt={skill?.title}></Image>
        </div>)
        }</div>
    </div>
  );
};

export default Skills;