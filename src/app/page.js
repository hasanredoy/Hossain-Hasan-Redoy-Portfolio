"use client"
import Main from "@/Components/main/Main";
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
          <Main></Main>
    </main>

  );
}
