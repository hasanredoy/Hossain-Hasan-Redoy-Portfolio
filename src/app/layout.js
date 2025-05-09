import { Roboto_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "H H Redoy",
  description: "hossain hasan redoy portfolio. find my better version",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.jpg" />
      </head>
      <body className={`${roboto_mono.className} bg-slate-100 `}>
        {/* navbar  */}
        <nav className=" shadow-xl ">
          <Navbar></Navbar>
        </nav>
        <div className=" w-[95%] lg:w-[85%] mx-auto">{children}</div>
         {/* footer  */}
       <div className="" >
        <Footer></Footer>
       </div>
      </body>
    </html>
  );
}
