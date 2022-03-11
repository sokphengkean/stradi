import logo from "./extensions/logo.png"
import navMenu from './extensions/navMenu.png'

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "WoFROG",
        "app.components.LeftMenu.navbrand.workplace": "The power of your bussiness",
      },
    },
    auth: {
      logo: logo,
    },
    head: {
      favicon: navMenu,
    },
    menu: {
      logo: navMenu,
    },
    theme: {
      colors: {
        alternative100: '#b9ecfb',
        alternative200: '#8be0f8',
        alternative500: '#5cd3f5',
        alternative600: '#2dc6f2',
        alternative700: '#16C0F0',
        danger700: '#b72b1a'
      },
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
