const AboutMe = () => {
  return (
    <div className=" my-20 bg-gray-600 p-4 lg:p-10">
      {/* about me text div  */}
      <div className="  text-white w-[95%] lg:w-[80%] mx-auto">
        <h1 className=" border-b-4 border-gray-900 mb-10 bg-slate-500 w-52 mx-auto text-3xl font-bold text-center shadow-lg shadow-slate-400">
          About Me{" "}
        </h1>
        <h4 className=" text-base lg:text-lg text-center lg:text-start">
          Hey there , I am a frontend Web developer,passionate about development
          technologies and loves to create eye-catching beautiful responsive
          website. I can collaborate with any team and work as a team member,
          and I have good communication skills. I have successfully create and
          deploy some full stack websites using technologies like{" "}
          <span className=" text-orange-500 font-bold">
            HTML, CSS, TailwindCSS, JavaScript, ReactJS, NodeJS, ExpressJS, and
            MongoDB.
          </span>
        </h4>
        <h4 className="  text-base lg:text-lg text-center lg:text-start mt-5">
          I am a quick learner who continuously learn and explore new
          technologies, to be stay forefront of the industry. My goal is take
          new challenges and keep improving my skills.
        </h4>
      </div>
      <div>
        {/* about me education and courses  */}
        <div>
          {/* education  */}
          <div>
            <h1>Education</h1>
          </div>
          {/* courses  */}
          <div>
            <h1>Courses</h1>
          </div>
        </div>
        {/* get in touch   */}
        <div>
          {/* linkedin  */}
          <div>
            <button>linkdin</button>
          </div>
          {/* courses  */}
          <div>
            <h1>github </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
