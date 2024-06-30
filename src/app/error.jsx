'use client'
import Link from "next/link";

const error = () => {
  return (
    <div className=" flex min-h-screen justify-center items-center flex-col gap-5">
      <h1 className=" text-5xl font-bold"> Something went wrong </h1>
      <Link href={-1}><button className=" text-xl font-bold px-4 pt-2 rounded-md ">Go Back</button></Link>
    </div>
  );
};

export default error;