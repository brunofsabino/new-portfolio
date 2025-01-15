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
import Link from 'next/link';
import mixpanel from '@/app/utils/mixpanel';

const ButtonWhats = () => {
    const handleWhatsAppClick = () => {
        mixpanel.track("Clicked on WhatsApp", {
            action: "Clicou no botão do WhatsApp da Main",
        });
    };
    return (
        <>
            <div className="flex space-x-1 md:space-x-4" onClick={handleWhatsAppClick}>
                <Link href={"https://wa.me/5511959982142"} target="blank">
                    <WhatsappIcon size={24} round />
                </Link>
            </div>
        </>

    )
}
export default ButtonWhats