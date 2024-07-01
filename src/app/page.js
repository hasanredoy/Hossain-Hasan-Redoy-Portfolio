export const dynamic = "force-dynamic"

import Banner from "@/components/Banner/Banner";
import "./globals.css"
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";


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
      {/* footer  */}
       <div >
        <Footer></Footer>
       </div>
    </main>

  );
}
