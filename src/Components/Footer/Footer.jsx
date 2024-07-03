import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Footer = () => {
  const navLinks = [
  
    {
      title:"About",
      to:"#about"
    },
    {
      title:"Skills",
      to:"#skills"
    },
    {
      title:"Projects",
      to:"#projects"
    },
    {
      title:"Contact",
      to:"#contactMe"
    },
  ]
  return (
    <footer className="bg-gray-200 ">
    <div className="w-[95%] lg:w-[85%] flex justify-between flex-col  mx-auto pt-5 lg:flex-row divide-gray-300">
   <div>
   <ul className=' flex gap-4 justify-center lg:justify-start lg:gap-5  '>
            {/* render all links by map  */}
            {navLinks?.map((links)=>(
              <Link key={links.to} className={`font-bold text-base lg:text-lg hover:scale-105 hover:text-[#f98407]`} href={links.to||""}
             
              ><button >{links.title}</button>
              </Link>
            ))}
          </ul>
          <hr className=" my-5  border border-gray-300" />
          <h4 className=" text-base font-semibold text-center lg:text-start">Copy right 2024 | Frontend Developer -- Hossain Hasan Redoy</h4>
   </div>
      <div className="flex flex-col pt-6 lg:pt-0 ">
       <h1 className=" text-xl font-semibold text-center mb-3 border-b border-gray-300"> My Social Links</h1>
        <div className="flex justify-center space-x-4">
          <Link href={"https://www.linkedin.com/in/hossain-hasan-redoy/"}>
          <h3><FaLinkedin className="text-4xl "></FaLinkedin></h3>
          </Link>
          <Link href={"https://github.com/hasanredoy"}>
          <h3><FaGithub className="text-4xl "></FaGithub></h3>
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=61561249570802"}>
          <h3><FaFacebook className="text-4xl "></FaFacebook></h3>
          </Link>
        </div>
    
      </div>
    </div>
  </footer>
  );
};

export default Footer;