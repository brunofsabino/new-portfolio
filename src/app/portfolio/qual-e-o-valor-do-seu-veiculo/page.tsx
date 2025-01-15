"use client"
import CommandAutocomplete from "@/components/AutoComplete";
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react";
import { DataTable } from "./dataTable";
import { Button } from "@/components/ui/button";
import mixpanel from "@/app/utils/mixpanel";

interface DataItem {
    valor: string;
    marca: string;
    modelo: string;
    anoModelo: number;
    combustivel: string;
    codigoFipe: string;
    dataConsulta: string,
    mesReferencia: string;
    tipoVeiculo: number;
    siglaCombustivel: string;
}

const Page = () => {
    const [query, setQuery] = useState("");
    const [querySelected, setQuerySelected] = useState(false);
    const [codigoFipe, setCodigoFipe] = useState<string | null>(null);
    const [data, setData] = useState<DataItem[]>([]); // Estado para armazenar os dados da API
    const [showList, setShowList] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loadingNewSearch, setLoadingNewSearch] = useState(false);

    useEffect(() => {
        if (query.length === 0) {
            setShowList(true);
        }
        if (showList && loadingNewSearch) {
            setLoadingNewSearch(false);
        }
        mixpanel.track("Acessou - Qual valor do seu Veiculo", {
            action: "Acessou o Projeto - Qual valor do seu Veiculo?",
        });
    }, [query, loadingNewSearch])

    const handleSearch = async () => {
        if (querySelected) {
            setLoading(true);
            if (codigoFipe) {
                const response = await fetch(`https://brasilapi.com.br/api/fipe/preco/v1/${codigoFipe}`);
                const data = await response.json();
                setLoading(false);
                setData(data); // Atualiza os dados no estado
                setQuerySelected(false);
                mixpanel.track("Clicou em Buscar - Qual valor do seu Veiculo", {
                    action: "Clicou em Buscar - Qual valor do seu Veiculo?",
                });
            }
        }
    };
    const handleNewSearch = () => {
        if (!showList) {
            setLoadingNewSearch(true);
            setShowList(true);
            setQuery("");
        }
    }
    const handleSelect = (codigoFipe: string, modelo: string) => {
        setQuerySelected(true);
        setCodigoFipe(codigoFipe);
        setQuery(modelo);
    };

    const handleCloseList = () => {
        setShowList(false);
    };
    const handleToggleList = () => {
        setShowList(!showList);
    };
    return (
        <div style={{
            backgroundImage: 'url(/assets/images/bg-qual-valor.webp)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }} className="w-full min-h-screen font-sans flex items-center justify-center flex-col">
            <div className="border rounded-2xl m-4 p-4 flex flex-col items-center justify-center bg-[#000000db]">
                <h1 className="md:text-5xl text-3xl text-white text-center font-extrabold" >QUAL É O VALOR DO SEU VEÍCULO?</h1>
                <p className="text-white text-center">Escolha uma das opções dos Modelos e clique em Buscar</p>
                <div className="flex w-[95%] md:w-[80%] justify-center mt-4 flex-col md:flex-row">
                    <CommandAutocomplete
                        query={query}
                        onSelect={handleSelect}
                        onQueryChange={(newQuery) => setQuery(newQuery)}
                        onClose={handleCloseList}
                        showList={showList}
                        onToggleList={handleToggleList}
                    />
                    <Button onClick={handleSearch} disabled={loading} > {loading ?? <Loader2 className="animate-spin" />} {loading ? "Aguarde..." : "Buscar"}</Button>
                </div>
                {data.length > 0 && (
                    <div className="bg-[#FAF5EA] rounded-lg mt-4 p-2 md:w-[90%]">
                        <div className="mt-2 w-[280px] md:w-[100%]">
                            <div className="flex flex-col md:flex-row justify-evenly items-center m-3 font-bold ">
                                <div className="text-white text-center mb-3 md:mb-0 bg-[#000000db] rounded-full p-2 pl-5 pr-5"> Modelo: {data[0].modelo}</div> {!showList && (<Button onClick={handleNewSearch}>Nova Pesquisa</Button>)}
                            </div>
                            <DataTable data={data} />
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Page;