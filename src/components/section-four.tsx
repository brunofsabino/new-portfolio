import Image from 'next/image'
import Link from 'next/link'

const SectionFour = () => {
    return (
        <section id="contact" className="p-12 flex flex-col items-center justify-center">
            <div className="mt-8 flex items-center flex-col font-sans">
                <h1 className="ml-2 lg:text-3xl text-2xl font-bold  text-primary">Contato</h1>
                <p className='text-center text-sm lg:text-base'>Escolha abaixo a forma de contato que preferir e clique para ser direcionado em uma nova aba!</p>
            </div>
            <div className="p-6 w-full font-sans flex flex-wrap justify-evenly  rounded-3xl"> {/* border border-primary */}
                <div className='m-2'>
                    <Link
                        href="https://wa.me/5511959982142"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/assets/images/Whats.png"}
                            width={100}
                            height={100}
                            alt="WhatsApp"
                            className="m-3 pointer"
                        />
                    </Link>
                </div>
                <div className='m-2'>
                    <Link
                        href="https://www.linkedin.com/in/bruno-ferraz-sabino/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/assets/images/linkedin.png"}
                            width={100}
                            height={100}
                            alt="Linkedin"
                            className="rounded-2xl m-3 pointer"
                        />
                    </Link>
                </div>
                <div className='m-2'>
                    <Link
                        href="mailto:brunoferrazsabino@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/assets/images/gmail.png"}
                            width={100}
                            height={100}
                            alt="Gmail"
                            className="rounded-2xl m-3 pointer"
                        />
                    </Link>
                </div>
                <div className='m-2'>
                    <Link
                        href="https://github.com/brunofsabino"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={"/assets/images/Git.png"}
                            width={100}
                            height={100}
                            alt="GITHUB"
                            className="rounded-2xl m-3 pointer"
                        />
                    </Link>
                </div>

            </div>
        </section>
    )
}
export default SectionFour