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
    <div className="my-32 ">
     
      {modal ? (
        <div className="relative mx-auto flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 bg-gray-200 text-black z-40 shadow-xl shadow-white border-2 border-gray-400">
        
          <h2 className="text-2xl font-semibold leading-tight tracking-wide">
            Thank You for contacting ..
          </h2>
          <p className="flex-1 text-center text-lg font-bold ">
            I will response as soon as possible.
          </p>
         
        </div>
      ) : (<>
        <h1 className=" border-b-2 border-gray-900 mb-10 w-52 mx-auto text-2xl lg:text-3xl font-black text-center shadow-lg shadow-slate-400 ">
        Contact Me
      </h1>
        <div className=" flex flex-col lg:flex-row gap-5 mt-10 ">
          {/* email and phone for contact */}
          <div className=" mt-5  flex-1">
            <h4 className=" text-xl font-bold">Contact Via</h4>
            <h4 className=" text-base  font-bold flex items-center gap-3 my-5">
              <IoIosMail className=" text-xl"></IoIosMail>{" "}
              <span className=" hover:underline cursor-pointer ">
                hossainhasanredoy@gamil.com
              </span>
            </h4>
            <h4 className=" text-base font-bold flex items-center gap-3 ">
              <FaPhoneAlt className=" text-xl"></FaPhoneAlt>{" "}
              <span className=" hover:underline cursor-pointer ">
                +97156-4718381
              </span>
            </h4>
          </div>
          <div className=" lg:flex justify-center items-center px-10 text-xl font-bold   hidden ">
            or
          </div>
          <div className=" flex w-full items-center min-w-full justify-between lg:hidden">
          <hr  className="  w-full border-2 lg:hidden" />
          <h1 className=" mx-5">or</h1>
          <hr className="  w-full border-2 lg:hidden" />
          </div>
          {/* Contact form */}
          <div className=" flex-1 ">
            <h3 className=" text-xl font-bold mt-4">Send Massage</h3>
            <form
              onSubmit={handleMessage}
              className=" border shadow-lg bg-gray-100 shadow-white px-5 pb-5 mt-10"
            >
              <h3 className=" text-center text-lg font-bold my-5">
                Please Fill The Form
              </h3>
              {/* name input  */}
              <div>
                <label htmlFor="Name" className="  font-bold">
                  Your Name*
                </label>
                <input
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  className=" w-full bg-white py-2 focus:border-2 focus:outline-green-600 text-black font-bold rounded-full border px-3 border-gray-700"
                  required
                />
              </div>
              {/* email input  */}
              <div className=" my-5">
                <label htmlFor="email" className=" font-bold">
                  Your Email*
                </label>
                <input
                  placeholder="Your Email"
                  required
                  type="email"
                  name="email"
                  className=" w-full bg-white py-2 focus:border-2 focus:outline-green-600 text-black font-bold rounded-full border px-3 border-gray-700"
                />
              </div>
              {/* message textarea*/}
              <div>
                <label htmlFor="message" className= " font-bold">
                  Massage*
                </label>
                <textarea
                  placeholder="Massage..."
                  name="massage"
                  required
                  className=" w-full bg-white py-2 focus:border-2 focus:outline-green-600 text-black font-bold rounded-xl border px-3 border-gray-700"
                  rows={4}
                />
              </div>
              <button className="mx-auto mt-5 flex items-center gap-2 Btn-Primary">
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
