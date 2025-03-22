"use client";

import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";

const ContactMe = () => {
  // handler for modal
  const [modal, setModal] = useState(false);

  // email js
  useEffect(() => emailjs.init("eXzwMIlo5NgMMDVCb"), []);

  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);
  // handler for email
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_b7ekigb";
    const templateId = "template_hplxt99";
    const templateId2 = "template_tf881yz";
    const userEmail = {
      name: nameRef.current.value,
      recipient: emailRef.current.value,
    };
    const myEmail = {
      name: nameRef.current.value,
      recipient: emailRef.current.value,
      message: messageRef.current.value,
    };
    try {
      setLoading(true);
      setModal(true)
      await emailjs.send(serviceId, templateId, userEmail);
      await emailjs.send(serviceId, templateId2, myEmail);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setModal(false)
    }
  };

  return (
    <div className="my-32 ">
      {modal ? (
        <div className="relative mx-auto flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 bg-gray-200 text-black z-40 shadow-xl shadow-white border-2 border-gray-400">
          <h2 className="text-xl font-semibold ">
            Thank You for contacting Me ❤..
          </h2>
          
        </div>
      ) : (
        <>
          <h1 className=" border-b-2 border-gray-900 mb-10 w-56 px-2 mx-auto text-2xl lg:text-3xl font-black text-center shadow-lg shadow-slate-400 pb-1 ">
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
                  +8801898-927249
                </span>
              </h4>
              <h4 className=" text-base font-bold flex items-center gap-3 mt-4 ">
                <FaLocationDot className=" text-xl"></FaLocationDot>{" "}
                <span className=" hover:underline cursor-pointer ">
                  Sylhet, Bangladesh.
                </span>
              </h4>

              
              <div className=" flex gap-5 mt-5">
              <Link href={"https://www.linkedin.com/in/hossain-hasan-redoy/"}>
          <h3><FaLinkedin className="text-4xl "></FaLinkedin></h3>
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=61569174743813"}>
          <h3><FaFacebook className="text-4xl "></FaFacebook></h3>
          </Link>
              </div>
            </div>
            <div className=" lg:flex justify-center items-center px-10 text-xl font-bold   hidden ">
              or
            </div>
            <div className=" flex w-full items-center min-w-full justify-between lg:hidden">
              <hr className="  w-full border-2 lg:hidden" />
              <h1 className=" mx-5">or</h1>
              <hr className="  w-full border-2 lg:hidden" />
            </div>
            {/* Contact form */}
            <div className=" flex-1 ">
              <h3 className=" text-xl font-bold mt-4">Send Message</h3>
              <form
                onSubmit={handleSubmit}
                className=" border bg-gray-200 px-5 pb-5 mt-10"
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
                    ref={nameRef}
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
                    ref={emailRef}
                    placeholder="Your Email"
                    required
                    type="email"
                    name="email"
                    className=" w-full bg-white py-2 focus:border-2 focus:outline-green-600 text-black font-bold rounded-full border px-3 border-gray-700"
                  />
                </div>
                {/* message textarea*/}
                <div>
                  <label htmlFor="message" className=" font-bold">
                    Massage*
                  </label>
                  <textarea
                    ref={messageRef}
                    placeholder="Massage..."
                    name="massage"
                    required
                    className=" w-full bg-white py-2 focus:border-2 focus:outline-green-600 text-black font-bold rounded-xl border px-3 border-gray-700"
                    rows={4}
                  />
                </div>
                <button disabled={loading} className="mx-auto mt-5 flex items-center gap-2 Btn-Primary">
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
