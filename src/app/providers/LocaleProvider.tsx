import React, { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { IntlProvider } from "react-intl";

import { useSelector } from "@/app/hooks";
import { locales } from "@/app/locale";

interface LocaleProviderProps {
    children?: ReactNode;
}

const LocaleProvider = ({ children }: LocaleProviderProps): JSX.Element => {
    const { locale } = useSelector((state) => state.settings);
    const localeData = locales[locale];

    return (
        <IntlProvider locale={localeData.locale} messages={localeData.messages}>
            <Helmet htmlAttributes={{ lang: localeData.locale }} />
            {children}
        </IntlProvider>
    );
};

export default LocaleProvider;
