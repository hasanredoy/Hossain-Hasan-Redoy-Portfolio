import Image from "next/image";
import spinner from "../../../public/image_processing20201002-7921-15nuf6k.gif"

const LoadingSpinner = () => {
  return  <div className=' flex justify-center items-end  '>
      <Image className=' w-60 h-60 ' width={260} height={240} src={spinner} alt="spinner" />
    </div>
 
};

export default LoadingSpinner;