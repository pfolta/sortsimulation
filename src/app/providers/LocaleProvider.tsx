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

    return (
        <IntlProvider locale={locale} messages={locales[locale]}>
            <Helmet htmlAttributes={{ lang: locale }} />
            {children}
        </IntlProvider>
    );
};

export default LocaleProvider;
