import { Portfolio } from "@/types/Portfolio"
import { DialogProject } from "./dialogProject"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const SectionTwo = () => {
    const dataPortfolio: Portfolio[] = [
        {
            title: "Titulo 1",
            img: 'imagem 1',
            technologies: ['react', 'js', 'html']
        },
        {
            title: "Titulo 2",
            img: 'imagem 2',
            technologies: ['react 2', 'js 2', 'html 2']
        },
        {
            title: "Titulo 3",
            img: 'imagem 3',
            technologies: ['react 3', 'js 3', 'html 3']
        },
    ]
    return (
        <section className="mt-5 p-8 flex flex-col items-center justify-center">
            <div className="mt-8 flex items-center">
                <h1 className="ml-2 text-3xl font-bold font-sans">Portfólio</h1>
            </div>
            <div className="mt-14 w-full font-sans flex flex-wrap justify-evenly">
                {dataPortfolio.map((item, index) => (
                    <DialogProject key={index} data={item} />
                ))}
            </div>
        </section>
    )
}
export default SectionTwo