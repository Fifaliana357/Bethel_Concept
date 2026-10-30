// Informations de l'entreprise : à modifier ici, elles se répercutent sur tout le site.
// Toute valeur qui commence par « [ » est considérée comme provisoire et s'affiche en pointillés.

export const SITE = {
  name: 'Bethel Concept',
  slogan: 'Votre vision, notre construction.',
  phoneDisplay: '038 12 212 69',
  phoneIntl: '+261381221269',
  whatsappNumber: '261381221269',
  whatsappText: 'Bonjour Bethel Concept, je souhaite un devis pour mon projet de décoration.',
  email: '[VOTRE EMAIL]',
  address: '[VOTRE ADRESSE]',
  hours: '[HORAIRES D’OUVERTURE]',
  facebook: '[PAGE FACEBOOK]',
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappText)}`;
export const TEL_URL = `tel:${SITE.phoneIntl}`;

// Clé Web3Forms : définissez VITE_WEB3FORMS_KEY (voir .env.example et LISEZ-MOI.md)
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'VOTRE_CLE_WEB3FORMS';
export const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
