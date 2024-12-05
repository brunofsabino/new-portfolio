import PostsAll from "@/components/posts";
import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Metadata } from "next";
import Image from 'next/image'



const Page = () => {

  return (
    <div className="container  md:mx-auto">
      <main className=" flex  min-h-[600px] ">
        <div className=" flex items-center justify-center  w-[7%]">
          <div className="rotate-90 font-sans">
            <div className=" flex justify-between items-center w-[300px]">
              <IoLogoWhatsapp className="-rotate-90" color="green" />
              <div>
                <span>(11)95998-2142</span>
              </div>
              <FaLongArrowAltDown className="-rotate-90" />
              <span>DESÇA</span>
            </div>
          </div>
        </div>
        <div className=" flex-1 flex ">
          <div className="w-[60%] flex  justify-end flex-col">
            <div><p>Olá, meu nome é</p></div>
            <div><h1>BRUNO FERRAZ SABINO</h1></div>
            <div><p>Desenvolvedor Full-Stack & Freelance</p></div>
          </div>
          <div className="bg-black w-[40%]">
            <Image
              src={'assets/images/men_happy.jpeg'}
              width={300}
              height={150}
              alt="Homem"
            />
          </div>
        </div>
        <div className=" flex items-center justify-center  w-[7%]">
          <div className="rotate-90 font-sans">
            <div className=" flex justify-between items-center w-[300px]">
              <IoLogoWhatsapp className="-rotate-90" color="green" />
              <div>
                <span>(11)95998-2142</span>
              </div>
              <FaLongArrowAltDown className="-rotate-90" />
              <span>DESÇA</span>
            </div>
          </div>
        </div>
      </main>
      {/* <PostsAll /> */}
    </div>
  )
}

export default Page;