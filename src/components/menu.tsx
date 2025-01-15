"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { Portfolio } from "@/types/Portfolio"
import { DialogProject } from "./dialogProject"
import { DialogProjectMenu } from "./dialogProjectMenu"
import { trackMenuClick } from "@/app/utils/mixpanel"

export function NavigationMenuDemo() {
    return (
        <NavigationMenu className="font-sans font-bold ">
            <NavigationMenuList className="bg-[#FAF5EA]">
                <NavigationMenuItem>
                    <Link href="/#home" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => trackMenuClick('Home')} >
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem >
                <NavigationMenuItem>
                    <Link href="/#portfolio" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => trackMenuClick('Portfólio')} >
                            Portfólio
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => trackMenuClick('Sobre mim')} >
                            Sobre mim
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#skills" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => trackMenuClick('Habilidades')} >
                            Habilidades
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem >
                <NavigationMenuItem>
                    <Link href="/#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => trackMenuClick('Contato')} >
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

