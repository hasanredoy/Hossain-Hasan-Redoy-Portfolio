import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactMe = () => {
  return (
    <div className=" my-20 lg:mt-40 container lg:max-w-6xl mx-auto">
      <h1 className=" text-3xl lg:text-5xl font-bold text-center w-80 mx-auto border-b shadow-lg shadow-gray-500">Contact Me</h1>
     <div className=" flex gap-5 mt-10">
       {/* email and phone for contact */}
       <div className=" mt-5 border p-5 flex-1 ">
        <h4 className=" text-2xl font-bold">Contact Me Via</h4>
        <h4 className=" text-lg font-bold flex items-center gap-3 my-5"><IoIosMail className=" text-3xl"></IoIosMail> <span className=" hover:underline cursor-pointer text-blue-600">hossainhasanredoy@gamil.com</span></h4>
        <h4 className=" text-lg font-bold flex items-center gap-3 my-5"><FaPhoneAlt className=" text-2xl"></FaPhoneAlt> <span className=" hover:underline cursor-pointer ">+97156-4718381</span></h4>
      </div>
      <div className=" mt-[10%]">or</div>
      {/* Contact form */}
      <div className=" flex-1">
        <h3 className=" text-2xl font-bold">Send Massage</h3>
      <form >
        <h3>Please Fill The Form</h3>
        <div>
          <label htmlFor="Name">Your Name</label>
          <input type="text" name="name"  className=" w-full bg-white text-black font-bold rounded-full border border-gray-700" />
        </div>
      </form>
      </div>
     </div>
    </div>
  );
};

export default ContactMe;