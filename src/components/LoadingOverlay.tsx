import { useState, useEffect } from "react";

const LoadingOverlay = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    // Lista de mensagens
    const messages = [
        "Estamos acessando e buscando os dados no Sofascore...",
        "Pode ser que demore um pouco, mas vale a pena!",
        "Quase lá! Os dados estão sendo carregados...",
        "Só mais um instante, estamos processando tudo para você!"
    ];

    // Alterar a mensagem a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="text-center">
                <div className="animate-spin border-t-4 border-b-4 border-white rounded-full w-12 h-12 mx-auto mb-4"></div>

                <p className="text-white bg-black rounded-lg p-2 font-bold text-lg">{messages[messageIndex]}</p>
            </div>
        </div>
    );
};

export default LoadingOverlay;
