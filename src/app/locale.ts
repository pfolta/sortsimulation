import "@/app/utils/Array";

import deMessages from "@/resources/lang/de.json";
import enMessages from "@/resources/lang/en.json";

const locales = {
    en: enMessages,
    de: { ...enMessages, ...deMessages }
};

const defaultLocale: Locale = "en";

const matchLocale = (userLocales: readonly string[]): Locale => {
    const supportedLocales = Object.keys(locales);

    const localeMatches = userLocales.map((userLocale) => {
        const exactMatch = supportedLocales.find((locale) => locale.toLowerCase() === userLocale.toLowerCase());
        const partialMatch = supportedLocales.find((locale) =>
            locale.toLowerCase().startsWith(userLocale.toLowerCase().split(/[-_]/).first())
        );

        return exactMatch || partialMatch;
    });

    return (localeMatches.find((locale) => locale !== undefined) || defaultLocale) as Locale;
};

export { locales, defaultLocale, matchLocale };
export type Locale = keyof typeof locales;
