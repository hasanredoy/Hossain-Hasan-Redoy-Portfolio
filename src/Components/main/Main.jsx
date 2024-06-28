"use client"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

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
    </main>
    </QueryClientProvider>
  );
};

export default Main;