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
                        <div className="flex cursor-pointer text-black">
                            BRUNO <p className="text-primary ml-1">FERRAZ SABINO</p>
                        </div>
                    </Link>
                </div>
                <Separator />
            </div>
            <div >
                <Separator orientation="vertical" />
            </div>
            <div className=" flex flex-col items-center text-black">
                <Separator />
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