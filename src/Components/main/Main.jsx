"use client"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

const queryClient = new QueryClient();
const Main = () => {

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
};

export default Main;