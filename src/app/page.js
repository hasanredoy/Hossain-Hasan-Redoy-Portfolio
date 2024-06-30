"use client"
import AboutMe from "@/Components/AboutMe/AboutMe";
import Banner from "@/Components/Banner/Banner";
import ContactMe from "@/Components/ContactMe/ContactMe";
import Footer from "@/Components/Footer/Footer";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const queryClient = new QueryClient();

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
 
    <QueryClientProvider client={queryClient}>

    <main className=" element-smooth overflow-hidden" >
          
      {/* banner  */}
       <div>
        <Banner></Banner>
       </div>
      {/* about me  */}
       <div  id="about">
        <AboutMe></AboutMe>
       </div>
      {/* skills   */}
       <div  id="skills">
        <Skills></Skills>
       </div>
      {/* projects  */}
       <div  id="projects">
        <Projects></Projects>
       </div>
      {/* contact  */}
       <div  id="contactMe">
        <ContactMe></ContactMe>
       </div>
      {/* footer  */}
       <div >
        <Footer></Footer>
       </div>
    </main>
    </QueryClientProvider>

  );
}
