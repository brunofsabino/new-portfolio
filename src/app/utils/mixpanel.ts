import mixpanel from 'mixpanel-browser';
import { v4 as uuidv4 } from 'uuid';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "", {
  debug: process.env.NODE_ENV !== 'production', 
});


export function identifyUser() {
  let userId = localStorage.getItem('mixpanelUserId');
  if (!userId) {
    userId = uuidv4(); 
    localStorage.setItem('mixpanelUserId', userId); 
  }

  // Identifique o usuário no Mixpanel
  mixpanel.identify(userId);


  mixpanel.people.set({
    $name: 'Visitante',
    //$email: '',
  });

  
  mixpanel.track('Primeira visita');
}
export function trackMenuClick(itemName: string) {
  mixpanel.track('Menu Item Clicked', {
    item: itemName,
  });
}
export default mixpanel;

