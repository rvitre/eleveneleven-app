import I18n from "react-native-i18n";

const setLocaleFromRemote = locales => {
  let translations;
  locales.forEach(l => {
    translations = {
      ...translations,
      [l.code]: l.texts
    };
  });
  I18n.translations = {
    ...translations
  };
};

export { setLocaleFromRemote };
