'use client';

import mixpanel, { identifyUser } from '@/app/utils/mixpanel';
import { useEffect } from 'react';

export default function Analytics() {
    useEffect(() => {
        // Rastreamento de visualizações de página
        mixpanel.track('Page View', {
            path: window.location.pathname,
        });
        identifyUser(); // Chama a função para identificar o usuário
    }, []);

    return null; // Não renderiza nada
}
