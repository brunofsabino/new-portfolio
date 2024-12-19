
import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Metadata } from "next";
import Image from 'next/image'
import ButtonsShare from "@/components/buttons-share";
import ButtonWhats from "@/components/button-whats";
import Link from "next/link";

const Main = () => {
    return (
        <section id="home" className="lg:flex  min-h-[500px] lg:pb-4 p-4">
            <div className=" flex items-center lg:justify-center justify-evenly lg:w-[7%] lg:h-[500px]">
                <div className="lg:rotate-90 font-sans text-gray-500 ">
                    <div className=" flex lg:items-end justify-evenly items-center lg:w-[450px] lg:h-[100px] h-[50px]">
                        <span className="mr-3">WHATSAPP</span>
                        <FaLongArrowAltDown className="-rotate-90 text-primary mr-3" />
                        <div className="mr-3">
                            <span>(11)95998-2142</span>
                        </div>
                        {/* <span>CLIQUE</span> */}
                        {/* <IoLogoWhatsapp className="-rotate-90" color="green" /> */}
                        <ButtonWhats />
                    </div>
                </div>
            </div>
            <div className=" flex-1 lg:flex font-sans mt-4">
                <div className="lg:w-[60%] flex  justify-center flex-col">
                    <div className="flex font-bold ml-0.5"><p>Olá, </p> <p className="text-primary ml-1">meu nome é</p></div>
                    <div><h1 className="lg:text-5xl md:text-4xl text-2xl flex font-bold mb-2">BRUNO <p className="text-primary ml-1">FERRAZ SABINO</p></h1></div>
                    <div><p className="lg:text-2xl md:text-lg text-base flex font-bold mt-7">Desenvolvedor Full-Stack & Freelance</p></div>
                    <div><p className="flex font-bold md:text-base text-sm text-gray-800 mt-3 mb-7">Sou um Desenvolvedor Full-Stack, atuando com NodeJs, ReactJS & NextJs e PHP. Possuo as habilidades e conhecimentos necessários para tornar seu projeto um sucesso.</p></div>
                    <Link href={"https://wa.me/5511959982142"} target="blank">
                        <Button>Fale comigo</Button>
                    </Link>
                </div>
                <div className="flex items-end justify-center lg:w-[40%]">
                    <Image
                        src={'/assets/images/men_happy2.png'}
                        width={400}
                        height={200}
                        alt="Homem"
                    />
                </div>
            </div>
            <div className=" flex items-center justify-center  w-[7%]">
                <div className="rotate-90 lg:flex hidden font-sans text-gray-500">
                    <div className=" flex justify-evenly items-start w-[450px] h-[100px]">
                        {/* <IoLogoWhatsapp className="-rotate-90" color="green" /> */}
                        {/* <div>
                <span>(11)95998-2142</span>
              </div> */}
                        <span>FALE COMIGO</span>
                        <FaLongArrowAltDown className="-rotate-90 text-primary" />
                        <ButtonsShare />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main