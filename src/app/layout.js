import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
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
      <body className={inter.className}>
        {/* navbar  */}
        <nav className=" shadow-xl sticky z-50 top-0">
          <Navbar></Navbar>
        </nav>
        <div>{children}</div>
        <div></div>
      </body>
    </html>
  );
}
