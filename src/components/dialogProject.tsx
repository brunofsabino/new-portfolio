import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Portfolio } from "@/types/Portfolio"
import Link from "next/link";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

interface DialogProjectProps {
    data: Portfolio; // Recebe apenas um objeto do tipo Portfolio
}

export function DialogProject({ data }: DialogProjectProps) {
    const createSlug = (title: string) => {
        return title
            .toLowerCase() // Converte para letras minúsculas
            .normalize('NFD') // Divide caracteres acentuados em partes (ex.: "é" -> "e" +  ́)
            .replace(/[\u0300-\u036f]/g, '') // Remove marcas de acentuação
            .replace(/\s+/g, '-') // Substitui espaços por hífens
            .replace(/[^\w-]+/g, ''); // Remove caracteres especiais, incluindo ? e !
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                {/* <Button variant="outline">{data.title}</Button> */}
                <div style={{ backgroundImage: `url(${data.img})` }} className="border-2 w-72 h-52 m-5 border-primary rounded-3xl">
                    {data.title}
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{data.title}</DialogTitle>
                    <DialogDescription>
                        {data.title}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        {/* <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        {/* <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" /> */}
                    </div>
                </div>
                <DialogFooter>
                    <Link href={`portfolio/${createSlug(data.title)}`} >
                        <Button >Save changes</Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
