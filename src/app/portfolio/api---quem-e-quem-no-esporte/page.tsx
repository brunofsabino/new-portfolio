"use client"
import mixpanel from "@/app/utils/mixpanel";
import { AccordionCode } from "@/components/AccordionCode";
import LoadingOverlay from "@/components/LoadingOverlay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export interface SearchResult {
    results: Result[];
}

export interface Result {
    type: string;
    entity: Entity;
    score: number;
}

export interface Entity {
    name: string;
    slug: string;
    shortName: string;
    team: Team;
    sport: Sport;
    position: string;
    jerseyNumber: string;
    userCount: number;
    id: number;
    country: Country;
}

export interface Team {
    name: string;
    slug: string;
    shortName: string;
    gender: string;
    sport: Sport;
    userCount: number;
    nameCode: string;
    disabled: boolean;
    national: boolean;
    type: number;
    id: number;
    country: Country;
    entityType: string;
    subTeams: SubTeam[];
    teamColors: TeamColors;
    fieldTranslations: FieldTranslations;
}

export interface Sport {
    name: string;
    slug: string;
    id: number;
}

export interface Country {
    alpha2: string;
    name: string;
    slug: string;
}

export interface SubTeam {
    // Estrutura de sub-times (vazia no exemplo)
}

export interface TeamColors {
    primary: string;
    secondary: string;
    text: string;
}

export interface FieldTranslations {
    nameTranslation?: {
        [key: string]: string;
    };
    shortNameTranslation?: {
        [key: string]: string;
    };
}


const Page = () => {
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [results, setResults] = useState<Result[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        mixpanel.track("Acessou - Quem é quem no Esporte?", {
            action: "Acessou o Projeto - Quem é quem no Esporte?",
        });
    }, [])
    const handleSearch = async () => {
        if (!name.trim()) {
            alert("Por favor, digite um nome válido!");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/scrape", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar dados.");
            }

            const { data } = await response.json();
            if (Array.isArray(data.results)) {
                setResults(data.results);
                setName("")
                setName2(name)
            } else {
                throw new Error("Resposta inesperada da API.");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Ocorreu um erro.");
            }
        } finally {
            setLoading(false);
            mixpanel.track("Clicou em Buscar - Quem é quem no Esporte?", {
                action: "Clicou em Buscar - Quem é quem no Esporte?",
            });
        }
    };
    return (
        <div style={{ backgroundImage: 'url(/assets/images/bg-quem-e-quem.webp)' }} className="w-full min-h-screen font-sans flex items-center justify-center flex-col">
            {loading && <LoadingOverlay />}
            <div className="border rounded-2xl m-4 p-4 flex flex-col items-center justify-center bg-[#000000e0] w-full md:w-[70%]">
                <h1 className="md:text-5xl text-3xl text-white text-center font-extrabold" >QUEM É QUEM NO ESPORTE?</h1>
                <p className="text-white">Digite um nome e clique em Buscar</p>
                <div className="flex items-center justify-center w-full">
                    <Input
                        type="text"
                        placeholder="Digite ao menos 3 caracteres"
                        className="m-1 md:w-[50%]"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Atualiza o estado
                    />
                    <Button className="m-1" onClick={handleSearch} disabled={loading}>
                        Buscar
                    </Button>
                </div>
                <div className="w-[100%] md:w-[90%] flex justify-center items-center flex-col">
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {results.length > 0 && (
                        <div className="mt-4 w-[100%] md:w-[90%] flex justify-center items-center flex-col bg-[#FAF5EA] rounded-lg p-2">
                            <h2 className="text-xl font-semibold m-4 text-center">Resultados para {name2}:</h2>
                            <div className="mt-2 mb-4 flex justify-center items-center flex-col ">
                                {/* Jogadores */}
                                {results.some((item) => item.type === "player") && (
                                    <>
                                        <h3 className="font-bold">Jogadores:</h3>
                                        <ul className="flex w-[100%] flex-wrap items-center justify-center">
                                            {results
                                                .filter((item) => item.type === "player")
                                                .map((item) => (
                                                    <li
                                                        key={item.entity.id}
                                                        className="flex items-center justify-center p-2 space-x-4 m-2 border-2 border-[#001726] rounded-lg bg-[#00000029]"
                                                    >
                                                        <div>
                                                            <Avatar>
                                                                <AvatarImage
                                                                    src={`https://img.sofascore.com/api/v1/player/${item.entity.id}/image`}
                                                                    alt={item.entity.name}
                                                                />
                                                                <AvatarFallback>{item.entity.name}</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div>
                                                            <p>Nome: {item.entity.name}</p>
                                                            <div className="flex">
                                                                <Avatar>
                                                                    <AvatarImage
                                                                        src={`https://img.sofascore.com/api/v1/team/${item.entity.team.id}/image`}
                                                                        alt={item.entity.name}
                                                                    />
                                                                    <AvatarFallback>{item.entity.name}</AvatarFallback>
                                                                </Avatar>
                                                                <span className="ml-2">
                                                                    {item.entity.team.name} - {item.entity.team.sport.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>
                                    </>
                                )}

                            </div>
                            <div className="mt-2 mb-4 flex justify-center items-center flex-col ">
                                {/* Times */}
                                {results.some((item) => item.type === "team") && (
                                    <>
                                        <Separator />
                                        <h3 className="font-bold m-4">Times:</h3>
                                        <ul className="flex w-[100%] flex-wrap items-center justify-center">
                                            {results
                                                .filter((item) => item.type === "team")
                                                .map((item) => (
                                                    <li
                                                        key={item.entity.id}
                                                        className="flex items-center justify-center p-2 space-x-4 m-2 border-2 border-[#001726] rounded-lg bg-[#00000029]"
                                                    >
                                                        <div>
                                                            <Avatar>
                                                                <AvatarImage
                                                                    src={`https://img.sofascore.com/api/v1/team/${item.entity.id}/image`}
                                                                    alt={item.entity.name}
                                                                />
                                                                <AvatarFallback>{item.entity.name}</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div>
                                                            <p>Nome: {item.entity.name}</p>
                                                            <div className="flex">
                                                                <span>
                                                                    País: {item.entity.country.name} ({item.entity.country.alpha2}) -
                                                                </span>
                                                                <span className="ml-1">
                                                                    Esporte: {item.entity.sport.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <div className="mt-2 mb-4 flex justify-center items-center flex-col ">
                                {/* Treinadores */}
                                {results.some((item) => item.type === "manager") && (
                                    <>
                                        <Separator />
                                        <h3 className="font-bold m-4">Treinadores:</h3>
                                        <ul className="flex w-[100%] flex-wrap items-center justify-center">
                                            {results
                                                .filter((item) => item.type === "manager")
                                                .map((item) => (
                                                    <li
                                                        key={item.entity.id}
                                                        className="flex items-center justify-center p-2 space-x-4 m-2 border-2 border-[#001726] rounded-lg bg-[#00000029]"
                                                    >
                                                        <div>
                                                            <Avatar>
                                                                <AvatarImage
                                                                    src={`https://img.sofascore.com/api/v1/manager/${item.entity.id}/image`}
                                                                    alt={item.entity.name}
                                                                />
                                                                <AvatarFallback>{item.entity.name}</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div>
                                                            <p>Nome: {item.entity.name}</p>
                                                            <div className="flex">
                                                                <span>
                                                                    País: {item.entity.country.name} ({item.entity.country.alpha2}) -
                                                                </span>
                                                                <span className="ml-1">
                                                                    Esporte: {item.entity.sport.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <div className="mt-4 mb-4 flex justify-center items-center flex-col ">
                                {/* Árbitros */}
                                {results.some((item) => item.type === "referee") && (
                                    <>
                                        <Separator />
                                        <h3 className="font-bold m-4">Árbitros:</h3>
                                        <ul className="flex w-[100%] flex-wrap items-center justify-center">
                                            {results
                                                .filter((item) => item.type === "referee")
                                                .map((item) => (
                                                    <li
                                                        key={item.entity.id}
                                                        className="flex items-center justify-center p-2 space-x-4 m-2 border-2 border-[#001726] rounded-lg bg-[#00000029]"
                                                    >
                                                        <div>
                                                            <Avatar>
                                                                <AvatarImage
                                                                    src={`https://img.sofascore.com/api/v1/referee/${item.entity.id}/image`}
                                                                    alt={item.entity.name}
                                                                />
                                                                <AvatarFallback>{item.entity.name}</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div className="">
                                                            <p>Nome: {item.entity.name}</p>
                                                            <div className="flex">
                                                                <span>
                                                                    País: {item.entity.country.name} ({item.entity.country.alpha2}) -
                                                                </span>
                                                                <span className="ml-1">
                                                                    Esporte: {item.entity.sport.name}
                                                                </span>
                                                            </div>
                                                        </div>

                                                    </li>
                                                ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                    {results.length > 0 &&
                        <div className="mt-4 w-[100%] md:w-[90%] flex justify-center items-center flex-col bg-[#FAF5EA] rounded-lg p-2">
                            <AccordionCode jsonData={results} />
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}
export default Page;