import Image from "next/image";
import hhrdoy from "../../../public/hh-redoy.png"
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=" my-20  flex flex-col-reverse  lg:flex-row justify-between gap-10 lg:gap-0" >
      {/* text div  */}
     <div className="  lg:text-start">
      {/* title */}
     <h1 className=" text-2xl md:text-3xl font-black mb-5 lg:mb-10">Hi ,<br className=" hidden lg:block" /> I am a Frontend
      <span className=" ml-2 text-[#f98407] shadow-none lg:shadow-lg shadow-[#f984078e]"> Web Developer. </span></h1>
      {/* body  */}
     <p className=" text-base md:text-lg  font-medium   lg:max-w-xl">I am <span className=" font-bold ">Hossain Hasan Redoy</span> passionate Frontend Web Developer, love to create and develop eye catchy responsive website.</p>
     <a className=" Btn-Primary mt-10 flex gap-5 items-center justify-center w-40" href="/Hossain-Hasan-Redoy-Resume.pdf" target="_blank" rel="noopener noreferrer" download ><FaDownload></FaDownload> Resume</a>
     </div>
     <div className="mx-auto lg:mx-0 text-end flex-1 flex  justify-end  ">
      <Image className=" border rounded-full border-[#f984079e] p-2  w-56 h-56 lg:w-[300px] lg:h-[310px]  xl:h-[350px] xl:w-[350px] transition-all delay-150"  src={hhrdoy} width={400} height={400} alt="Hossain Hasan Redoy-image"></Image>
     </div>
    </div>
  );
};

export default Banner;