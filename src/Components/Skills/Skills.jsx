'use client'
import Image from "next/image"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import { useEffect, useState } from "react"

const { default: useAxios } = require("@/Hooks/useAxios")

// get axios hook 
const axiosHook = useAxios()

const Skills = () => {
// loading state 
const [isSkillsLoading, setSkillsLoading]=useState(true)
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
    <div className=" mt-32">
      <h1 className=" border-b-2 border-gray-900 mb-10 w-52 mx-auto text-3xl font-black text-center shadow-lg shadow-slate-400">My Skills</h1>

      <h4 className=" text-lg my-8 lg:text-xl font-bold text-center ">Here are the technologies I work with.</h4>

      {isSkillsLoading&&<LoadingSpinner></LoadingSpinner>}
      <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-10 gap-5 lg:gap-10 w-[90%] justify-center items-center text-center lg:w-[60%] mx-auto">{isSkillsLoading||skills?.map(skill=><div className=" rounded-lg mx-auto  " key={skill._id}>
           <Image   className=" bg-[#050505]  p-3 hover:scale-105 rounded-xl lg:w-20 lg:h-20" src={skill.icon}  width={80} height={80} alt={skill?.title}></Image>
        </div>)
        }</div>
    </div>
  );
};

export default Skills;