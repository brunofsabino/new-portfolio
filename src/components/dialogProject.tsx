"use client"
import mixpanel from "@/app/utils/mixpanel";
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

export function DialogProject({ data }: DialogProjectProps) {
    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const handleDialogOpen = () => {
        mixpanel.track('Dialog Opened', {
            projectTitle: data.title,
        });
    };

    const handleSeeProjectClick = () => {
        mixpanel.track('See Project Clicked', {
            projectTitle: data.title,
            technologies: data.technologies.join(', '),
        });
    };
    return (
        <Dialog>
            <DialogTrigger asChild onClick={handleDialogOpen}>
                <div style={{ backgroundImage: `url(${data.img})` }} className="border-2 cursor-pointer w-72 h-52 m-5 border-[#001726] rounded-3xl flex flex-col justify-evenly items-center">
                    <h1 className="md:text-3xl text-2xl text-white text-center font-extrabold bg-[#000000e1] rounded-lg m-1" >{data.title}</h1>
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
                                <br /><br /> Tecnologias utilizadas: {data.technologies.join(", ")}.
                            </span>
                        </div>
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <Link href={`portfolio/${createSlug(data.title)}`}>
                        <Button onClick={handleSeeProjectClick} >Veja o Projeto</Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
