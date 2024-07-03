import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className=" mt-32  ">
      {/* about me text div  */}
      <h1 className=" border-b-2 border-gray-900 mb-10 w-52 mx-auto text-2xl lg:text-3xl font-black text-center shadow-lg shadow-slate-400">
        About Me{" "}
      </h1>
      <section className="flex gap-5 flex-col lg:flex-row pt-10">
        {/* text div  */}
        <div className=" w-full flex-1 lg:w-[60%] lg:pr-8  ">
          <h4 className=" text-base md:text-lg font-medium">
            Hey there , I am a frontend Web developer, passionate about
            development technologies and loves to create eye-catching beautiful
            responsive website.I can collaborate with any team and work
            as a team member, and I have good communication skills. I have
            successfully create and deploy some full stack websites using
            technologies like{" "}
            <span className=" font-bold">
              HTML, CSS, TailwindCSS, JavaScript, ReactJS, NodeJS, ExpressJS,
              and MongoDB.
            </span>
          </h4>
          <h4 className="  text-base md:text-lg   mt-3 font-medium">
            I am a quick learner who continuously learn and explore new
            technologies, to be stay forefront of the industry. My goal is to
            take new challenges and keep improving my skills.
          </h4>
        </div>
        {/* education div  */}
        <div className=" ">
          {/* education  */}
          <div className=" shadow-lg px-2 pb-2">
            <h1 className=" text-xl lg:text-2xl font-bold  border-b border-gray-400">
              Education
            </h1>
            <h3 className=" text-base mt-3">
              Institute:{" "}
              <span className=" font-bold">
                Aushkandi R P high School and College
              </span>
            </h3>
            <h3 className=" text-base mt-3">
              Exam: <span className=" font-bold">SSC (3.51 out GPA5)</span>
            </h3>
            <h3 className=" text-base mt-3">
              Subject: <span className=" font-bold">ARTH</span>
            </h3>
          </div>
          {/* courses  */}
          <div className="mt-10 shadow-lg px-2 pb-2">
            <h1 className=" text-xl lg:text-2xl font-bold  border-b border-gray-400">
              Course
            </h1>
            <h3 className=" text-base mt-3">
              Institute: <span className=" font-bold">Programming Hero </span>
            </h3>
            <h3 className=" text-base mt-3">
              Course: <span className=" font-bold">Web Development</span>
            </h3>
            <h3 className=" text-base mt-3">
              Certificate:{" "}
              <Link
                target="_blank"
                className=" hover:underline cursor-pointer font-bold text-[#f98407]"
                href={
                  "https://drive.google.com/file/d/1o8PxGG-aBuwX1ifN6cI7v0tRaxibLb6w/view?usp=sharing"
                }
              >
                View
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
