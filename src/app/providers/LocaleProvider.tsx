import React, { ReactNode, useEffect } from "react";
import { IntlProvider } from "react-intl";

import { useSelector } from "@/app/hooks";
import { locales, Locale } from "@/app/locale";

interface LocaleProviderProps {
    children?: ReactNode;
    locale?: Locale;
    setHtmlLangAttribute?: boolean;
}

const LocaleProvider = ({ children, setHtmlLangAttribute, ...props }: LocaleProviderProps) => {
    const storeLocale = useSelector((state) => state.settings.locale);
    const locale = props.locale ?? storeLocale;

    useEffect(() => {
        if (setHtmlLangAttribute) {
            document.documentElement.setAttribute("lang", locale);
        }

        return () => {
            if (setHtmlLangAttribute) {
                document.documentElement.removeAttribute("lang");
            }
        };
    }, [locale, setHtmlLangAttribute]);

    return (
        <IntlProvider locale={locale} messages={locales[locale]}>
            {children}
        </IntlProvider>
    );
};

export default LocaleProvider;
