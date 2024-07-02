import Link from "next/link";
import { FaLinkedin ,FaGithub } from "react-icons/fa";


const AboutMe = () => {
  return (
    <div className=" my-20  ">
      {/* about me text div  */}
        <h1 className=" border-b-2 border-gray-900 mb-10 w-52 mx-auto text-3xl font-black text-center shadow-lg shadow-slate-400">
          About Me{" "}
        </h1>
  <section className="flex gap-5">
      {/* text div  */}
      <div>
    <h4 className=" text-base text-center lg:text-start">
          Hey there , I am a frontend Web developer, passionate about development
          technologies and loves to create eye-catching beautiful responsive
          website. I can collaborate with any team and work as a team member,
          and I have good communication skills. I have successfully create and
          deploy some full stack websites using technologies like{" "}
          <span className=" text-yellow-500 font-bold">
            HTML, CSS, TailwindCSS, JavaScript, ReactJS, NodeJS, ExpressJS, and
            MongoDB.
          </span>
        </h4>
        <h4 className="  text-base  text-center lg:text-start mt-5">
          I am a quick learner who continuously learn and explore new
          technologies, to be stay forefront of the industry. My goal is take
          new challenges and keep improving my skills.
        </h4>
    </div>
    {/* education div  */}
    <div>
        {/* about me education and courses  */}
        <div className=" ">
          {/* education  */}
          <div className="  p-2 shadow-lg shadow-white">
            <h1 className=" text-2xl font-bold  border-b border-gray-600">Education</h1>
            <h3 className=" text-base mt-3">Institute: <span className=" font-bold">Aushkandi R P high School and College</span></h3>
            <h3 className=" text-base mt-3">Exam: <span className=" font-bold">SSC (3.51 out GPA5)</span></h3>
            <h3 className=" text-base mt-3">Subject: <span className=" font-bold">ARTH</span></h3>
          </div>
          {/* courses  */}
          <div className=" text-white p-2 shadow-lg shadow-white">
            <h1 className=" text-2xl font-bold text-white border-b border-gray-200">Course</h1>
            <h3 className=" text-base mt-3">Institute: <span className=" font-bold">Programming Hero </span></h3>
            <h3 className=" text-base mt-3">Course: <span className=" font-bold">Web Development</span></h3>
            <h3 className=" text-base mt-3">Certificate: <Link target="_blank" className=" hover:underline cursor-pointer font-bold" href={"https://drive.google.com/file/d/1o8PxGG-aBuwX1ifN6cI7v0tRaxibLb6w/view?usp=sharing"}>View</Link></h3>
          </div>
          {/* find me  */}
          <div className="  md:col-span-2 lg:col-span-1 md:mx-auto lg:mx-0 md:text-center text-start p-2 shadow-lg shadow-white">
          <h1 className=" border-b w-44 mx-auto border-gray-200 font-bold text-2xl text-white">Find me on</h1>
          <div className=" flex gap-5 justify-center">
            {/* linkedin  */}
            <div>
              <Link target="_blank" href={"https://www.linkedin.com/in/hossain-hasan-redoy/"} > <button className=" text-5xl font-bold bg-white my-5"><FaLinkedin></FaLinkedin></button></Link>
            </div>
            {/* courses  */}
            <div>
            <Link target="_blank" href={"https://github.com/hasanredoy"} > <button className=" text-5xl font-bold bg-white my-5"><FaGithub></FaGithub></button></Link>
            </div>
          </div>
          </div>
        </div>
      </div>
  </section>
     
    </div>
  );
};

export default AboutMe;
