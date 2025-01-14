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
            img: '/assets/images/bg-qual-valor.webp',
            technologies: ['NodeJS', 'NextJS', 'ReactJS'],
            description: "Este projeto permite que você descubra o valor atualizado do seu veículo utilizando dados oficiais da Tabela Fipe. Com uma interface intuitiva, os usuários podem pesquisar por marca, modelo e ano, obtendo rapidamente informações precisas e confiáveis. Este aplicativo destaca-se por sua praticidade e integração com APIs modernas, proporcionando uma experiência interativa e informativa."
        },
        {
            title: "API - Quem é quem no esporte?",
            img: '/assets/images/bg-quem-e-quem.webp',
            technologies: ['NodeJS', 'ReactJS', 'NextJS'],
            description: "Este projeto realiza web scraping no site Sofascore para gerar uma API completa com informações detalhadas sobre jogadores, times, treinadores e árbitros de diversos esportes. Explore dados atualizados e descubra quem é quem no mundo esportivo por meio de uma interface interativa e informativa, utilizando as mais recentes tecnologias web para oferecer uma experiência única."
        },
    ]
    return (
        <section id="portfolio" className="mt-8 p-8 flex flex-col items-center justify-center">
            <div className="mt-8 items-center flex flex-col text-center">
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