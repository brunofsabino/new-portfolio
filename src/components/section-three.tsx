import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Image from 'next/image'

const SectionThree = () => {
    return (
        <section className="bg-[#001726] rounded-3xl mt-5 p-8 flex flex-col items-center justify-center">
            <div className="mt-8 flex items-center">
                <h1 className="text-white ml-2 text-3xl font-bold font-sans">Habilidades</h1>
            </div>
            <div className="text-white mt-14 font-sans flex flex-wrap items-center justify-evenly">
                <div className="flex border border-[#FAF5EA] rounded-3xl m-4">
                    <Image
                        src={"/assets/images/Laravel.png"}
                        width={100}
                        height={100}
                        alt="Laravel"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/Next.png"}
                        width={100}
                        height={100}
                        alt="NextJS"
                        className="rounded-2xl m-3"
                    />
                </div>
                <div className="flex border border-[#FAF5EA] rounded-3xl m-4">
                    <Image
                        src={"/assets/images/Node.png"}
                        width={100}
                        height={100}
                        alt="NodeJS"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/React.png"}
                        width={100}
                        height={100}
                        alt="ReactJS"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/Php.png"}
                        width={100}
                        height={100}
                        alt="PHP"
                        className="rounded-2xl m-3"
                    />
                </div>
                <div className="flex border border-[#FAF5EA] rounded-3xl m-4">
                    <Image
                        src={"/assets/images/Mysql.png"}
                        width={100}
                        height={100}
                        alt="Mysql"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/Postgre.png"}
                        width={100}
                        height={100}
                        alt="Postgre"
                        className="rounded-2xl m-3"
                    />
                </div>
                <div className="flex border border-[#FAF5EA] rounded-3xl m-4">
                    <Image
                        src={"/assets/images/Git.png"}
                        width={100}
                        height={100}
                        alt="GITHUB"
                        className="rounded-2xl m-3"
                    />
                </div>
                <div className="flex border border-[#FAF5EA] rounded-3xl m-4">
                    <Image
                        src={"/assets/images/Typescript.png"}
                        width={100}
                        height={100}
                        alt="Typescript"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/Javascript.png"}
                        width={100}
                        height={100}
                        alt="Javascript"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/Tailwind.png"}
                        width={100}
                        height={100}
                        alt="TailwindCSS"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/Css.png"}
                        width={100}
                        height={100}
                        alt="CSS"
                        className="rounded-2xl m-3"
                    />
                    <Image
                        src={"/assets/images/Html.png"}
                        width={100}
                        height={100}
                        alt="HTML"
                        className="rounded-2xl m-3"
                    />
                </div>
            </div>
        </section>
    )
}
export default SectionThree