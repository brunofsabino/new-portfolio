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

interface DialogProjectProps {
    data: Portfolio;
}

export function DialogProjectMenu({ data }: DialogProjectProps) {
    const createSlug = (title: string) => {
        return title
            .toLowerCase() // Converte para letras minúsculas
            .normalize('NFD') // Divide caracteres acentuados em partes (ex.: "é" -> "e" +  ́)
            .replace(/[\u0300-\u036f]/g, '') // Remove marcas de acentuação
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div style={{ backgroundImage: `url(${data.img})` }} className="border-2 cursor-pointer w-44 h-40 m-3 flex justify-center items-center flex-col border-[#001726] rounded-3xl ">
                    <h1 className="text-1xl text-white text-center font-extrabold bg-[#000000e1]  rounded-lg m-1" >{data.title}</h1>
                    <div className="border-2 border-[#001726] rounded-3xl text-sm bg-[#FAF5EA] p-1 text-center font-bold  ">
                        {data.technologies.join(", ")}
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle> <div className="font-sans text-primary">Projeto: {data.title}</div> </DialogTitle>
                    <DialogDescription>
                        <div className="text-black font-sans mt-3">
                            {data.description}
                            <span className="font-bold">
                                <br /><br /> Tecnologias utilizadas: {data.technologies.join(", ")}.
                            </span>
                        </div>
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Link href={`portfolio/${createSlug(data.title)}`} >
                        <Button >Veja o Projeto</Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
