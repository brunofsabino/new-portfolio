"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Tipo para cada item no array `res`
interface ResItem {
    periodo: string;
    frequencia: number;
}

// Tipo para o objeto principal da API
interface APIResponse {
    nome: string;
    sexo: string | null;
    localidade: string;
    res: ResItem[];
}

// Tipo para os dados processados
interface ProcessedDataItem {
    periodo: string;
    frequencia: number;
}

const Page = () => {
    const [name, setName] = useState("");
    const [nameResult, setNameResult] = useState("");
    const [chartData, setChartData] = useState<ProcessedDataItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const processAPIData = (data: APIResponse[]): ProcessedDataItem[] => {
        return data[0]?.res.map((item: ResItem) => {
            // Remove colchetes e ajusta o formato do período
            const periodo = item.periodo
                .replace("[", "") // Remove o colchete inicial
                .replace("[", "") // Remove qualquer outro colchete
                .replace(",", "-") // Substitui a vírgula por um traço
                .replace("[", ""); // Remove o colchete final, caso necessário

            return {
                periodo,
                frequencia: item.frequencia,
            };
        }) || [];
    };

    const handleSearch = async () => {
        if (!name.trim()) {
            alert("Por favor, digite um nome válido!");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`);
            if (!response.ok) throw new Error("Erro ao buscar dados.");

            const data = await response.json();
            const formattedData = processAPIData(data);
            setNameResult(name);
            setChartData(formattedData);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Ocorreu um erro.");
            }
            setChartData([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundImage: 'url(/assets/images/bg-quantos-existe.png)' }} className="w-full min-h-screen font-sans flex items-center justify-center flex-col">
            <div className="border rounded-2xl m-4 p-4 flex flex-col items-center justify-center bg-[#000000a3]">
                <h1 className="md:text-5xl text-3xl text-white text-center font-extrabold" >QUANTOS DE VOCÊ EXISTE NO BRASIL?</h1>
                <p className="text-white">Digite seu nome e clique em Buscar</p>
                <div className="flex items-center justify-center w-full">
                    <Input
                        type="text"
                        placeholder="Digite seu nome"
                        className="m-1 md:w-[50%]"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Atualiza o estado
                    />
                    <Button className="m-1" onClick={handleSearch} disabled={loading}>
                        {loading ? "Buscando..." : "Buscar"}
                    </Button>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {chartData.length > 0 && (
                    <div className="w-full  mt-4 mb-10 p-5  bg-[#000000a3] rounded-2xl">
                        <h2 className="md:text-2xl text-base font-bold text-white mb-4">{nameResult} - Interaja com o gráfico para visualizar os dados correspondentes a cada período.</h2>
                        <ResponsiveContainer width="100%" height={300} className="p-1">
                            <AreaChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="periodo" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="frequencia" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Page