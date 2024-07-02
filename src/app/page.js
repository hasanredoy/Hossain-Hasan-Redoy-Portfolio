export const dynamic = "force-dynamic"

import Banner from "@/Components/Banner/Banner";
import "./globals.css"
import AboutMe from "@/Components/AboutMe/AboutMe";
import Skills from "@/Components/Skills/Skills";
import Projects from "@/Components/Projects/Projects";
import ContactMe from "@/Components/ContactMe/ContactMe";
import Footer from "@/Components/Footer/Footer";


export default function Home() {


  return (
 

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
     
    </main>

  );
}
