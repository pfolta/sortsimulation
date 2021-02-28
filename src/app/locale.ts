import { createIntl, createIntlCache } from "react-intl";

import deDEMessages from "@/resources/lang/de-DE.json";
import enUSMessages from "@/resources/lang/en-US.json";

const cache = createIntlCache();

const locales = {
    "de-DE": createIntl(
        {
            locale: "de-DE",
            messages: deDEMessages
        },
        cache
    ),
    "en-US": createIntl(
        {
            locale: "en-US",
            messages: enUSMessages
        },
        cache
    )
};

type Locale = keyof typeof locales;

export default locales;
export { Locale };
