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
            console.log(loadingNewSearch)
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
            console.log("aqui")
        }
    }
    const handleSelect = (codigoFipe: string, modelo: string) => {
        setQuerySelected(true);
        setCodigoFipe(codigoFipe); // Atualiza o código FIPE
        setQuery(modelo); // Atualiza a query para o modelo
    };

    const handleCloseList = () => {
        setShowList(false); // Fecha a lista de comandos após selecionar
    };
    const handleToggleList = () => {
        setShowList(!showList); // Alterna a visibilidade da lista
    };
    return (
        <div style={{
            backgroundImage: 'url(/assets/images/bg-qual-valor.webp)',
            backgroundPosition: 'center', // Centraliza a imagem no container
            backgroundSize: 'cover', // Faz com que a imagem cubra todo o container
            backgroundRepeat: 'no-repeat', // Evita repetição da imagem
            //height: '100vh', // Define a altura como a altura total da tela
            //width: '100%', // Define a largura como 100% do container

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
                        showList={showList} // Passa o showList como prop
                        onToggleList={handleToggleList} // Passa a função para alternar a visibilidade da lista
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