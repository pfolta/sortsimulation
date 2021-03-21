import deDEMessages from "@/resources/lang/de-DE.json";
import enUSMessages from "@/resources/lang/en-US.json";

const DEFAULT_LOCALE: Locale = "en-US";

const locales = {
    "en-US": {
        language: "English",
        locale: "en-US",
        messages: enUSMessages
    },
    "de-DE": {
        language: "Deutsch",
        locale: "de-DE",
        messages: { ...enUSMessages, ...deDEMessages }
    }
};

const matchLocale = (userLocales: readonly string[]): Locale => {
    const supportedLocales = Object.keys(locales);

    const localeMatches = userLocales.map((userLocale) => {
        const exactMatch = supportedLocales.find((locale) => locale.toLowerCase() === userLocale.toLowerCase());
        const partialMatch = supportedLocales.find((locale) => locale.toLowerCase().startsWith(userLocale.toLowerCase().split(/[-_]/)[0]));

        return exactMatch || partialMatch;
    });

    return (localeMatches.find((locale) => locale !== undefined) || DEFAULT_LOCALE) as Locale;
};

export { DEFAULT_LOCALE, locales, matchLocale };
export type Locale = keyof typeof locales;
