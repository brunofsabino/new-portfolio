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
import mixpanel from '@/app/utils/mixpanel';

const ButtonsShare = () => {
    const handleWhatsAppClick = () => {
        mixpanel.track("Clicked on WhatsApp", {
            action: "Clicou no botão do WhatsApp da Main (Lateral)",
        });
    };
    const handleEmailClick = () => {
        mixpanel.track("Clicked on E-mail", {
            action: "Clicou no botão do E-mail da Main (Lateral)",
        });
    };
    const handleGitHubClick2 = () => {
        mixpanel.track("Clicked on  GitHub", {
            action: "Clicou no botão do GitHub da Main (Lateral)",
        });
    };
    return (
        <>
            <div className="flex space-x-1 md:space-x-4">
                <EmailShareButton onClick={handleEmailClick} url={'mailto:brunoferrazsabino@gmail.com?subject=Contato%20via%20Portfolio&body=Olá!%20Gostaria%20de%20falar%20com%20você%20sobre%20seus%20serviços.'} title={'title'} >
                    <EmailIcon size={24} round />
                </EmailShareButton>
                <WhatsappShareButton
                    url={"https://wa.me/5511959982142"}
                    title="Oi! Gostaria de saber mais sobre seu serviço!"
                    onClick={handleWhatsAppClick}
                >
                    <WhatsappIcon size={24} round />
                </WhatsappShareButton>
                <a
                    href="https://github.com/brunofsabino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600"
                    onClick={handleGitHubClick2}
                >
                    <FaGithub size={24} />
                </a>
            </div>
        </>

    )
}
export default ButtonsShare