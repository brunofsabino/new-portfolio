import { optionsFipe } from "@/app/utils/optionsFipe";
import { Command, CommandInput, CommandItem, CommandList } from "./ui/command";

interface AutocompleteProps {
    query: string;
    onSelect: (codigoFipe: string, modelo: string) => void;
    onQueryChange: (query: string) => void;
    onClose: () => void;
    showList: boolean;
    onToggleList: () => void;
}

const CommandAutocomplete = ({ query, onSelect, onQueryChange, onClose, showList, onToggleList }: AutocompleteProps) => {
    const filteredOptions = optionsFipe.filter((item) =>
        item.modelo.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Command className="w-[100%] md:w-[80%] mr-3 mb-3 md:mb-0">

            <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Digite o modelo e selecione uma opção..."
                className="border p-2 rounded w-full text-xs md:text-base"
            />
            {showList && (
                <CommandList>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((item) => (
                            <CommandItem
                                key={item.codigoFipe}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onSelect={() => {
                                    onSelect(item.codigoFipe, item.modelo);
                                    onClose();
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
