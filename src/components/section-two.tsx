import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const SectionTwo = () => {
    return (
        <section className="mt-5 p-8 flex flex-col items-center justify-center">
            <div className="mt-8 flex items-center">
                <h1 className="ml-2 text-xl font-bold font-sans">Portfólio</h1>
            </div>
            <div className="mt-14 w-full font-sans flex flex-wrap justify-evenly">
                <div className="border w-72 h-52 m-5 bg-black rounded-3xl">
                    ...
                </div>
                <div className="border w-72 h-52  m-5 bg-black rounded-3xl">
                    ...
                </div>
                <div className="border w-72 h-52  m-5 bg-black rounded-3xl">
                    ...
                </div>
                <div className="border w-72 h-52  m-5 bg-black rounded-3xl">
                    ...
                </div>
                <div className="border w-72 h-52  m-5 bg-black rounded-3xl">
                    ...
                </div>
            </div>
        </section>
    )
}
export default SectionTwo