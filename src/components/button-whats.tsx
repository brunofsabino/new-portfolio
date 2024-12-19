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

const ButtonWhats = () => {

    return (
        <>
            <div className="flex space-x-1 md:space-x-4">
                {/* <WhatsappShareButton
                    url={"https://wa.me/5511959982142"}
                    title="Oi! Gostaria de saber mais sobre seu serviço!"
                > */}
                <Link href={"https://wa.me/5511959982142"} target="blank">

                    <WhatsappIcon size={24} round />
                </Link>
                {/* </WhatsappShareButton> */}
            </div>
        </>

    )
}
export default ButtonWhats