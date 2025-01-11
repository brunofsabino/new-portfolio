
// "use client"
// import { optionsFipe } from "@/app/utils/optionsFipe";
// import { Command, CommandInput, CommandItem, CommandList } from "./ui/command";


// interface AutocompleteProps {
//     query: string;
//     onSelect: (codigoFipe: string) => void;
// }

// const CommandAutocomplete = ({ query, onSelect }: AutocompleteProps) => {
//     // Filtrando as opções com base na query
//     const filteredOptions = optionsFipe.filter((item) =>
//         item.modelo.toLowerCase().includes(query.toLowerCase())
//     );

//     return (
//         <Command>
//             <CommandInput
//                 value={query}
//                 readOnly
//                 placeholder="Search models..."
//                 className="border p-2 rounded w-full"
//             />
//             <CommandList>
//                 {filteredOptions.length > 0 ? (
//                     filteredOptions.map((item) => (
//                         <CommandItem
//                             key={item.codigoFipe}
//                             className="p-2 hover:bg-gray-200 cursor-pointer"
//                             onClick={() => onSelect(item.codigoFipe)} // Chama a função quando o item é selecionado
//                         >
//                             {item.modelo}
//                         </CommandItem>
//                     ))
//                 ) : (
//                     <CommandItem className="p-2 text-gray-500">No results found</CommandItem>
//                 )}
//             </CommandList>
//         </Command>
//     );
// };

// export default CommandAutocomplete;




import { optionsFipe } from "@/app/utils/optionsFipe";
import { Command, CommandInput, CommandItem, CommandList } from "./ui/command";

interface AutocompleteProps {
    query: string;
    onSelect: (codigoFipe: string, modelo: string) => void;
    onQueryChange: (query: string) => void;
    onClose: () => void; // Função para fechar o CommandList
    showList: boolean; // Estado para controlar se a lista deve ser exibida
    onToggleList: () => void; // Função para alternar a visibilidade da lista
}

const CommandAutocomplete = ({ query, onSelect, onQueryChange, onClose, showList, onToggleList }: AutocompleteProps) => {
    // Filtrando as opções com base na query
    const filteredOptions = optionsFipe.filter((item) =>
        item.modelo.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Command className="w-[100%] md:w-[80%] mr-3 mb-3 md:mb-0">

            <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)} // Atualiza o estado quando o usuário digita
                placeholder="Digite o modelo e selecione uma opção..."
                className="border p-2 rounded w-full text-xs md:text-base"
            />
            {/* <CommandList>
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((item) => (
                        <CommandItem
                            key={item.codigoFipe}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => onSelect(item.codigoFipe)} // Chama a função quando o item é selecionado
                        >
                            {item.modelo}
                        </CommandItem>
                    ))
                ) : (
                    <CommandItem className="p-2 text-gray-500">No results found</CommandItem>
                )}
            </CommandList> */}
            {showList && (
                <CommandList>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((item) => (
                            <CommandItem
                                key={item.codigoFipe}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                // onClick={() => {
                                //     onSelect(item.codigoFipe, item.modelo); // Chama a função quando o item é selecionado
                                //     console.log(item.codigoFipe)
                                //     onClose(); // Fecha o CommandList
                                // }}
                                onSelect={() => {
                                    onSelect(item.codigoFipe, item.modelo); // Chama a função quando o item é selecionado
                                    console.log(item.codigoFipe); // Verificando se está selecionando
                                    onClose(); // Fecha o CommandList
                                }}
                            >
                                {item.modelo}
                            </CommandItem>
                        ))
                    ) : (
                        <CommandItem className="p-2 text-gray-500">No results found</CommandItem>
                    )}
                </CommandList>
            )}
        </Command>
    );
};

export default CommandAutocomplete;
