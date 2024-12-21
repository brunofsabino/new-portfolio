
"use client"
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuItem,
    navigationMenuTriggerStyle,
    NavigationMenuTrigger
} from "./ui/navigation-menu"
import { IoIosInformationCircle } from "react-icons/io";
import Link from "next/link"
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { SiFiles } from "react-icons/si";
import { MdForum } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import React from "react"
import { cn } from "../lib/utils";
import { Separator } from "@radix-ui/react-separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"
import { ImNewspaper } from "react-icons/im";
import { SheetClose } from "./ui/sheet";


const MenuNavigationMobile = () => {
    return (
        <NavigationMenu orientation="vertical" className="md:w-[300px] sm:w-[200px] mt-5 font-sans">
            < NavigationMenuList className="flex items-center justify-center flex-col space-y-2 md:w-[300px] " >
                <NavigationMenuItem className=" " >
                    <SheetClose asChild>
                        {/* <Link href="#home" passHref legacyBehavior> */}
                        <NavigationMenuLink href="/#home" className={navigationMenuTriggerStyle()}>
                            <div className="flex justify-center items-center">
                                <FaHome className="text-2xl mr-1 font-sans" color="#7c3aed" /><span>Home</span>
                            </div>
                        </NavigationMenuLink>
                        {/* </Link> */}
                    </SheetClose>
                </NavigationMenuItem>
                <Separator className="separator w-full my-2" />
                <NavigationMenuItem className=" " >
                    <SheetClose asChild>
                        <NavigationMenuLink href="/#portfolio" className={navigationMenuTriggerStyle()}>
                            <div className="flex justify-center items-center">
                                <SiFiles className="text-2xl mr-1 " color="#001726" /><span>Portfólio</span>
                            </div>
                        </NavigationMenuLink>
                    </SheetClose>
                </NavigationMenuItem>

                <Separator className="separator w-full my-2" />
                {/* <NavigationMenuItem className="">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-2">
                            <AccordionTrigger className={navigationMenuTriggerStyle()}>
                                <div className="flex justify-center items-center">
                                    <RiArticleFill className="text-2xl mr-1" color="#48BC6A" /><span>Artigos</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="gap-3 p-4  w-[200px] md:w-[300px] md:grid-cols-2 lg:w-[600px] flex flex-col items-center">
                                   

                                    <SheetClose asChild><ListItem href="/artigos/teologiaedoutrina" title="Teologia e Doutrina" className="text-center"></ListItem></SheetClose>
                                    <SheetClose asChild><ListItem href="/artigos/vidacrista" title="Vida Cristã" className="text-center"></ListItem></SheetClose>
                                    <SheetClose asChild><ListItem href="/artigos/familiaerelacionamentos" title="Família e Relacionamentos" className="text-center"></ListItem></SheetClose>
                                    <SheetClose asChild><ListItem href="/artigos/espiritualidadeecrescimentopessoal" title="Espiritualidade e Crescimento Pessoal" className="text-center"></ListItem></SheetClose>
                                    <SheetClose asChild><ListItem href="/artigos/historiadasigrejas" title="História das Igrejas" className="text-center"></ListItem></SheetClose>
                                    <SheetClose asChild><ListItem href="/artigos/culturaeentretenimento" title="Cultura e Entretenimento" className="text-center"></ListItem></SheetClose>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </NavigationMenuItem> */}
                <NavigationMenuItem className=" " >
                    <SheetClose asChild>
                        <NavigationMenuLink href="/#about" className={navigationMenuTriggerStyle()}>
                            <div className="flex justify-center items-center">
                                <FcAbout className="text-2xl mr-1 " color="#48BC6A" /><span>Sobre mim</span>
                            </div>
                        </NavigationMenuLink>
                    </SheetClose>
                </NavigationMenuItem>
                <Separator />
                <NavigationMenuItem className=" " >
                    <SheetClose asChild>
                        <NavigationMenuLink href="/#skills" className={navigationMenuTriggerStyle()}>
                            <div className="flex justify-center items-center">
                                <FaTools className="text-2xl mr-1 " color="#7c3aed" /><span>Habilidades</span>
                            </div>
                        </NavigationMenuLink>
                    </SheetClose>
                </NavigationMenuItem>
                <Separator className="separator w-full my-2" />
                <NavigationMenuItem className=" " >
                    <SheetClose asChild>
                        <NavigationMenuLink href="/#contact" className={navigationMenuTriggerStyle()}>
                            <div className="flex justify-center items-center">
                                <FaPhoneVolume className="text-2xl mr-1 " color="#001726" /><span>Contato</span>
                            </div>
                        </NavigationMenuLink>
                    </SheetClose>
                </NavigationMenuItem>
                <Separator className="separator w-full my-2" />
            </NavigationMenuList >
        </NavigationMenu >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default MenuNavigationMobile
