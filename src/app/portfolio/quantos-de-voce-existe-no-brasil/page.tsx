"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
//import { Bar } from "react-chartjs-2";
//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";

// Registrar os componentes necessários do Chart.js
//ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Page = () => {
    const [name, setName] = useState(""); // Estado para armazenar o nome digitado
    const [nameResult, setNameResult] = useState(""); // Estado para armazenar o nome digitado
    const [results, setResults] = useState(null); // Estado para armazenar os resultados
    const [chartData, setChartData] = useState([]); // Dados formatados para o gráfico
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState(null); // Estado para erros

    const processAPIData = (data) => {
        return data[0]?.res.map(item => {
            // Remove colchetes e ajusta o formato do período
            const periodo = item.periodo
                .replace("[", "") // Remove o colchete inicial
                .replace("[", "") // Remove qualquer outro colchete
                .replace(",", "-") // Substitui a vírgula por um traço
                .replace("[", ""); // Remove o colchete final, caso necessário

            return {
                periodo, // Período formatado
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
            //setResults(data);
            // Processa os dados para o gráfico
            // const formattedData = data[0]?.res?.map(item => ({
            //     periodo: item.periodo.replace("[", "").replace("]", ""), // Remove os colchetes do período
            //     frequencia: item.frequencia
            // })) || [];
            const formattedData = processAPIData(data);
            setNameResult(name);
            // if (typeof (name) === string) {


            // }
            setChartData(formattedData);
        } catch (err) {
            setError(err.message || "Ocorreu um erro.");
            setChartData([]);
        } finally {
            setLoading(false);
        }
    };

    // Configuração dos dados do gráfico

    return (
        <div style={{ backgroundImage: 'url(/assets/images/bg-quantos-existe.png)' }} className="w-full min-h-screen font-sans flex items-center justify-center flex-col">
            <div className="border rounded-2xl m-4 p-4 flex flex-col items-center justify-center bg-[#000000a3]">
                <h1 className="text-5xl text-white text-center font-extrabold" >QUANTOS DE VOCÊ EXISTE NO BRASIL?</h1>
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
                        <h2 className="text-2xl font-bold text-white mb-4">{nameResult} - Clique no gráfico para ver de acordo com os períodos</h2>
                        {/* <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="periodo" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="frequencia" stroke="#8884d8" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer> */}

                        {/* <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="periodo" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="frequencia" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer> */}

                        <ResponsiveContainer width="100%" >
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