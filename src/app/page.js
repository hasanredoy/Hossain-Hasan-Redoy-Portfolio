import AboutMe from "@/Components/AboutMe/AboutMe";
import Banner from "@/Components/Banner/Banner";


export default function Home() {

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
