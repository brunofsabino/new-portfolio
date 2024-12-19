
// import MenuNavigationMobile from "./MenuNavigationMobile";

// import {
//     Sheet,
//     SheetClose,
//     SheetContent,
//     SheetDescription,
//     SheetFooter,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
// } from "./ui/sheet"
// import { GiHamburgerMenu } from "react-icons/gi";

// export function SheetMenuMobile() {
//     return (
//         <Sheet>
//             <SheetTrigger asChild>
//                 <GiHamburgerMenu size={22} />
//             </SheetTrigger>
//             <SheetContent className="overflow-auto">
//                 <SheetHeader>
//                 </SheetHeader>

//                 {/* <div className="mt-5 mb-5">

//                     <SearchInputMobile />
//                 </div> */}
//                 <div className="w-full flex justify-center">
//                     <MenuNavigationMobile />
//                 </div>
//                 <SheetFooter>
//                     <SheetClose asChild>
//                         {/* <Button type="submit">Save changes</Button> */}
//                     </SheetClose>
//                 </SheetFooter>
//             </SheetContent>
//         </Sheet>
//     )
// }



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
