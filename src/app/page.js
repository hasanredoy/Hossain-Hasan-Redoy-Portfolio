"use client"
import AboutMe from "@/Components/AboutMe/AboutMe";
import Banner from "@/Components/Banner/Banner";
import Navbar from "@/Components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter()
  useEffect(() => {
    // Check if the URL has a hash
    if (window.location.hash) {
        // Clear the hash by changing the URL
       router.replace(window.location.pathname, undefined, { shallow: true });
    }
}, []);

  return (
    <main className=" element-smooth overflow-hidden" >
          
      {/* banner  */}
       <div>
        <Banner></Banner>
       </div>
      {/* About me   */}
       <div  id="about">
        <AboutMe></AboutMe>
       </div>
    </main>
  );
}
