import Image from "next/image";
import hhrdoy from "../../../public/hh-redoy-image.png"
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=" mt-40 w-[1100px] mx-auto flex justify-between" >
      {/* text div  */}
     <div>
     <h1 className=" text-3xl lg:text-4xl font-black mb-10">Hi ,<br /> I am a Frontend
      <span className=" text-green-600 shadow-xl shadow-green-300"> Web Developer. </span></h1>
     <p className=" text-2xl font-bold max-w-xl">I am <span className=" text-green-600">Hossain Hasan Redoy</span> passionate Frontend Web Developer, love to create and develop eye catchy responsive website.</p>
     <button className=" customBtn mt-10 flex gap-5 items-center"><FaDownload></FaDownload> Resume</button>
     </div>
     <div>
      <Image  src={hhrdoy} width={400} height={500} alt="Hossain Hasan Redoy-image"></Image>
     </div>
    </div>
  );
};

export default Banner;