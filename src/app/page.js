export const dynamic = "force-dynamic"
import AboutMe from "@/Components/AboutMe/AboutMe";
import Banner from "@/Components/Banner/Banner";
import ContactMe from "@/Components/ContactMe/ContactMe";
import Footer from "@/Components/Footer/Footer";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import "./globals.css"


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
