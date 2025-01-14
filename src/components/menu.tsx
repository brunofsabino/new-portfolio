"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { Portfolio } from "@/types/Portfolio"
import { DialogProject } from "./dialogProject"
import { DialogProjectMenu } from "./dialogProjectMenu"
//import { Icons } from "@/components/icons"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"




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
        title: "API - Quem É Quem no Esporte?",
        img: '/assets/images/bg-quem-e-quem.webp',
        technologies: ['NodeJS', 'ReactJS', 'NextJS'],
        description: "Este projeto realiza web scraping no site Sofascore para gerar uma API completa com informações detalhadas sobre jogadores, times, treinadores e árbitros de diversos esportes. Explore dados atualizados e descubra quem é quem no mundo esportivo por meio de uma interface interativa e informativa, utilizando as mais recentes tecnologias web para oferecer uma experiência única."
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu className="font-sans font-bold ">
            <NavigationMenuList className="bg-[#FAF5EA]">
                <NavigationMenuItem>
                    <Link href="/#home" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem >
                <NavigationMenuItem>
                    <Link href="/#portfolio" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Portfólio
                        </NavigationMenuLink>
                    </Link>
                    {/*
                    <NavigationMenuTrigger>Portfólio</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4  lg:grid-cols-[.75fr_1fr] ">
                            <li className="row-span-3">
                                 <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                       
                                    </a>
                                </NavigationMenuLink> 
                            </li>
                            {dataPortfolio.map((item, index) => (
                                // <NavigationMenuLink asChild>

                                <DialogProjectMenu key={index} data={item} />
                                // </NavigationMenuLink>
                            ))}
                        </ul>
                    </NavigationMenuContent>*/}
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Sobre mim
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#skills" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Habilidades
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem >
                <NavigationMenuItem>
                    {/* <NavigationMenuTrigger>Contato</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent> */}
                    <Link href="/#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contato
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
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

