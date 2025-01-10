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
                <div style={{ backgroundImage: `url(${data.img})` }} className="border-2 cursor-pointer w-72 h-52 m-5 border-[#001726] rounded-3xl flex flex-col justify-evenly items-center">
                    <h1 className="md:text-3xl text-2xl text-white text-center font-extrabold" >{data.title}</h1>
                    <div className="border-2 border-[#001726] rounded-3xl w-[70%] bg-[#FAF5EA] p-1 text-center font-bold  ">
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
                                Tecnologias utilizadas: {data.technologies.join(", ")}.
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
