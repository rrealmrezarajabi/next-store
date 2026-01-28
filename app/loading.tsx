import Image from "next/image";
import loader from "@/assets/loader.gif";
const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <Image src={loader} width={150} height={150} alt="loading"></Image>
    </div>
  );
};

export default loading;
