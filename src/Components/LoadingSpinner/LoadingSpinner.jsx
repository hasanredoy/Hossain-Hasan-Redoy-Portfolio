import Image from "next/image";
import spinner from "../../../public/output-onlinegiftools (4).gif"

const LoadingSpinner = () => {
  return  <div className=' flex justify-center items-end  '>
      <Image className=' w-60 h-60 ' width={260} height={240} src={spinner} alt="spinner" />
    </div>
 
};

export default LoadingSpinner;