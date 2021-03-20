import deDEMessages from "@/resources/lang/de-DE.json";
import enUSMessages from "@/resources/lang/en-US.json";

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

export { locales };
export type Locale = keyof typeof locales;
