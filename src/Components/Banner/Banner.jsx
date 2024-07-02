import Image from "next/image";
import hhrdoy from "../../../public/hh-redoy.png"
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=" my-20  flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-0" >
      {/* text div  */}
     <div className=" text-center lg:text-start">
      {/* title */}
     <h1 className=" text-2xl md:text-3xl font-black mb-5 lg:mb-10">Hi ,<br className=" hidden lg:block" /> I am a Frontend
      <span className=" ml-2 text-[#018001] shadow-none lg:shadow-xl shadow-green-300"> Web Developer. </span></h1>
      {/* body  */}
     <p className=" text-base md:text-lg lg:text-xl font-semibold max-w-[80%] mx-auto lg:max-w-xl">I am <span className=" font-bold text-[#018001]">Hossain Hasan Redoy</span> passionate Frontend Web Developer, love to create and develop eye catchy responsive website.</p>
     <a className=" mx-auto lg:mx-0 customBtn mt-10 flex gap-5 items-center w-40" href="/Hossain-Hasan-Redoy-Resume.pdf" target="_blank" rel="noopener noreferrer" download ><FaDownload></FaDownload> Resume</a>
     </div>
     <div className=" mx-auto lg:mx-0 text-end flex-1 flex  justify-end  ">
      <Image className=" "  src={hhrdoy} width={400} height={500} alt="Hossain Hasan Redoy-image"></Image>
     </div>
    </div>
  );
};

export default Banner;