import mixpanel from 'mixpanel-browser';
import { v4 as uuidv4 } from 'uuid';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "", {
  debug: process.env.NODE_ENV !== 'production', // Ativa logs em modo desenvolvimento
});

// Função para criar e identificar o usuário
export function identifyUser() {
  // Tente obter um identificador único do localStorage ou crie um novo
  let userId = localStorage.getItem('mixpanelUserId');
  if (!userId) {
    userId = uuidv4(); // Gera um novo UUID
    localStorage.setItem('mixpanelUserId', userId); // Armazena o ID no localStorage
  }

  // Identifique o usuário no Mixpanel
  mixpanel.identify(userId);

  // Você também pode adicionar propriedades do usuário
  mixpanel.people.set({
    $name: 'Visitante', // Exemplo de propriedade
    $email: '', // Propriedade de exemplo, pode ser vazia
    // Você pode adicionar outras propriedades do usuário aqui
  });

  // Caso queira rastrear a primeira visita, você pode adicionar eventos
  mixpanel.track('Primeira visita');
}
export function trackMenuClick(itemName: string) {
  mixpanel.track('Menu Item Clicked', {
    item: itemName,
  });
}
export default mixpanel;

