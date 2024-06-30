"use client"

import useAxios from "@/Hooks/useAxios";
import axios from "axios";
import { useState } from "react";
import {
  FaLocationArrow,
  FaLongArrowAltRight,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactMe = () => {
  // handler for modal
  const [modal, setModal] = useState(false);
  const axiosHook = useAxios();
  const handleMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const massage = form.massage.value;
    const fullMassage = {
      name,
      email,
      massage,
    };
    // console.log(fullMassage);
    axiosHook.post("/api/massage", fullMassage).then((res) => {
      if (res.data.result.insertedId) {
        // console.log("jello");
        setModal(!modal)
        setTimeout(() => {
          setModal(false)
        },2000);
      }
    });
  };
  return (
    <div className="bg-slate-800 p-5 lg:p-20 text-white my-20 lg:mt-40  ">
     
      {modal ? (
        <div className="relative mx-auto flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 bg-white text-black z-40 shadow-xl shadow-white">
        
          <h2 className="text-2xl font-semibold leading-tight tracking-wide">
            Thank You for contacting ..
          </h2>
          <p className="flex-1 text-center text-lg font-bold ">
            I will response as soon as possible.
          </p>
         
        </div>
      ) : (<>
        <h1 className=" text-3xl font-black text-center w-72 lg:w-80 mx-auto border-b shadow-lg mb-5 shadow-gray-500">
        Contact Me
      </h1>
        <div className=" flex flex-col lg:flex-row gap-5 mt-10 ">
          {/* email and phone for contact */}
          <div className=" mt-5  flex-1 text-white flex flex-col  justify-center">
            <h4 className=" text-2xl font-bold">Contact Me Via</h4>
            <h4 className=" text-base lg:text-lg font-bold flex items-center gap-3 my-5">
              <IoIosMail className=" text-xl lg:text-3xl"></IoIosMail>{" "}
              <span className=" hover:underline cursor-pointer ">
                hossainhasanredoy@gamil.com
              </span>
            </h4>
            <h4 className=" text-base lg:text-lg font-bold flex items-center gap-3 ">
              <FaPhoneAlt className=" text-xl lg:text-2xl"></FaPhoneAlt>{" "}
              <span className=" hover:underline cursor-pointer ">
                +97156-4718381
              </span>
            </h4>
          </div>
          <div className=" lg:flex justify-center items-center px-10 text-xl font-bold text-white  hidden ">
            or
          </div>
          <div className=" flex w-full items-center min-w-full justify-between lg:hidden">
          <hr  className=" text-white w-full border-2 lg:hidden" />
          <h1 className=" mx-5">or</h1>
          <hr className=" text-white w-full border-2 lg:hidden" />
          </div>
          {/* Contact form */}
          <div className=" flex-1 ">
            <h3 className=" text-2xl font-bold">Send Me Massage</h3>
            <form
              onSubmit={handleMessage}
              className=" shadow-lg shadow-white p-5 mt-10"
            >
              <h3 className=" text-center text-xl font-bold my-5">
                Please Fill The Form
              </h3>
              {/* name input  */}
              <div>
                <label htmlFor="Name" className=" text-lg font-bold">
                  Your Name*
                </label>
                <input
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  className=" w-full bg-white py-2 focus:border-2 focus:border-sky-500 text-black font-bold rounded-full border px-3 border-gray-700"
                  required
                />
              </div>
              {/* email input  */}
              <div className=" my-5">
                <label htmlFor="email" className=" text-lg font-bold">
                  Your Email*
                </label>
                <input
                  placeholder="Your Email"
                  required
                  type="email"
                  name="email"
                  className=" w-full bg-white py-2 focus:border-2 focus:border-sky-500 text-black font-bold rounded-full border px-3 border-gray-700"
                />
              </div>
              {/* message textarea*/}
              <div>
                <label htmlFor="message" className=" text-lg font-bold">
                  Massage*
                </label>
                <textarea
                  placeholder="Massage..."
                  name="massage"
                  required
                  className=" w-full bg-white py-2 focus:border-2 focus:border-sky-500 text-black font-bold rounded-xl border px-3 border-gray-700"
                  rows={4}
                />
              </div>
              <button className="mx-auto mt-5 flex items-center gap-2 bg-slate-400 text-black font-bold px-4 py-2 rounded">
                Send <FaLocationArrow></FaLocationArrow>
              </button>
            </form>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default ContactMe;
