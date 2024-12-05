"use client"
import {
    EmailShareButton,
    EmailIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';
import { FaGithub } from "react-icons/fa";

const ButtonsShare = () => {

    return (
        <>
            <div className="flex space-x-1 md:space-x-4">
                <EmailShareButton url={'mailto:brunoferrazsabino@gmail.com?subject=Contato%20via%20Portfolio&body=Olá!%20Gostaria%20de%20falar%20com%20você%20sobre%20seus%20serviços.'} title={'title'} >
                    <EmailIcon size={24} round />
                </EmailShareButton>
                <WhatsappShareButton
                    url={"https://wa.me/5511959982142"}
                    title="Oi! Gostaria de saber mais sobre seu serviço!"
                >
                    <WhatsappIcon size={24} round />
                </WhatsappShareButton>
                {/* <TwitterShareButton url={'url'} title={'title'} className=''>
                    <TwitterIcon size={24} round />
                </TwitterShareButton> */}
                <a
                    href="https://github.com/brunofsabino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600"
                >
                    <FaGithub size={24} />
                    {/* <span>Visite meu GitHub</span> */}
                </a>
            </div>
        </>

    )
}
export default ButtonsShare