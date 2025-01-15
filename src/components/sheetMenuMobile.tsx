import MenuNavigationMobile from "./MenuNavigationMobile";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

export function SheetMenuMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <GiHamburgerMenu size={30} />
            </SheetTrigger>
            <SheetContent className="overflow-auto">
                <SheetHeader>
                    {/* Adicione um título para acessibilidade */}
                    <SheetTitle className="font-sans">BRUNO FERRAZ SABINO</SheetTitle>
                </SheetHeader>
                <div className="w-full flex justify-center">
                    <MenuNavigationMobile />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        {/* O botão de fechar pode ser colocado aqui */}
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
