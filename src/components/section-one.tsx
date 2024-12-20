import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const SectionOne = () => {
    return (
        <section id="about" className="bg-[#001726] rounded-3xl mt-5 m-3 p-8 flex flex-col items-center justify-center">
            <div className="mt-8 flex md:flex-row flex-col items-center">
                <Avatar className="w-20 h-20">
                    <AvatarImage src="/assets/images/Bruno3.jpeg" className="w-full h-full" />
                    <AvatarFallback>BFS</AvatarFallback>
                </Avatar>
                <h1 className="text-white ml-2 lg:text-3xl text-2xl text-center font-bold font-sans">Bruno Ferraz Sabino</h1>
            </div>
            <div className="text-white mt-14 font-sans">
                <p>Apaixonado por tecnologia e movido pela vontade de contribuir com projetos que realmente impactam a vida das pessoas, comecei minha jornada em Sistemas de Informação, onde me formei em 2017. Desde cedo, mergulhei no mundo do desenvolvimento web, explorando PHP, JavaScript e, posteriormente, NodeJS para criar APIs e sistemas eficientes.</p>
                <br />
                <p>   Atuei como desenvolvedor front-end, sendo responsável por criar e implementar interfaces de usuário interativas e responsivas para websites e aplicativos web. Também possuo conhecimento em back-end, com experiência em Node.js para desenvolvimento de APIs consistentes, além de trabalhar com bancos de dados como MongoDB e ferramentas como Express para criar soluções completas e escaláveis.</p>
                <br />
                <p>   Meu objetivo? Continuar evoluindo como desenvolvedor, trabalhando em projetos que sejam ao mesmo tempo desafiadores e impactantes. Acredito no poder da tecnologia para transformar negócios e vidas.</p>
                <br />
                <p>   Se você busca um profissional comprometido com a qualidade e focado em entregar resultados reais, vamos nos conectar! Será um prazer compartilhar ideias e construir algo incrível juntos.</p>
            </div>
        </section>
    )
}
export default SectionOne