import { Separator } from "@/components/ui/separator";
import { NavigationMenuDemo } from "@/components/menu";
import { SheetMenuMobile } from "./sheetMenuMobile";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex p-4 container mx-auto">
            <div className="flex-1 ">
                <div className="p-2 font-sans font-bold">
                    <Link href="/#home" legacyBehavior passHref>
                        BRUNO FERRAZ SABINO
                    </Link>

                </div>
                <Separator className="" />

            </div>
            <div className="">
                <Separator orientation="vertical" />
            </div>
            <div className=" flex flex-col items-center">
                <Separator className="" />
                <div className="hidden lg:flex">
                    <NavigationMenuDemo />
                </div>
                <div className="lg:hidden w-[60%] p-1 flex justify-between items-center cursor-pointer">
                    <SheetMenuMobile />
                </div>
            </div>

        </header>
    )
}
export default Header