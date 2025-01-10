import { Portfolio } from "@/types/Portfolio"
import { DialogProject } from "./dialogProject"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const SectionTwo = () => {
    const dataPortfolio: Portfolio[] = [
        {
            title: "Quantos de você existe no Brasil?",
            img: '/assets/images/bg-quantos-existe.png',
            technologies: ['NodeJS', 'ReactJS'],
            description: "Este projeto utiliza a API do IBGE para consultar estatísticas de nomes no Brasil. Descubra quantas pessoas compartilham o mesmo nome que o seu, explorando dados populacionais de forma interativa e informativa."
        },
        {
            title: "Qual é o valor do seu veículo?",
            img: 'imagem 2',
            technologies: ['NodeJS', 'ReactJS'],
            description: "..."
        },
        {
            title: "Titulo 3",
            img: 'imagem 3',
            technologies: ['react 3', 'js 3', 'html 3'],
            description: "..."
        },
    ]
    return (
        <section id="portfolio" className="mt-8 p-8 flex flex-col items-center justify-center">
            <div className="mt-8 items-center flex flex-col">
                <h1 className="ml-2 lg:text-3xl text-2xl font-bold font-sans text-primary ">Portfólio</h1>
                <p>Clique em um dos projetos para obter mais informações e visualizar o funcionamento.</p>
            </div>
            <div className="mt-10 w-full font-sans flex flex-wrap justify-evenly">
                {dataPortfolio.map((item, index) => (
                    <DialogProject key={index} data={item} />
                ))}
            </div>
        </section>
    )
}
export default SectionTwo