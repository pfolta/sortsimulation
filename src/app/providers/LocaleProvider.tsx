import React, { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { IntlProvider } from "react-intl";

import { useSelector } from "@/app/hooks";
import { locales, Locale } from "@/app/locale";

interface LocaleProviderProps {
    locale?: Locale;
    children?: ReactNode;
}

const LocaleProvider = (props: LocaleProviderProps): JSX.Element => {
    const storeLocale = useSelector((state) => state.settings.locale);
    const locale = props.locale ?? storeLocale;

    return (
        <IntlProvider locale={locale} messages={locales[locale]}>
            <Helmet htmlAttributes={{ lang: locale }} />
            {props.children}
        </IntlProvider>
    );
};

export default LocaleProvider;
