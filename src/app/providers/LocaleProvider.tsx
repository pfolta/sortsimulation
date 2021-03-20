import React, { ReactNode } from "react";
import { IntlProvider } from "react-intl";

import { useSelector } from "@/app/hooks";
import { locales } from "@/app/locale";

interface LocaleProviderProps {
    children?: ReactNode;
}

const LocaleProvider = ({ children }: LocaleProviderProps): JSX.Element => {
    const { locale } = useSelector((state) => state.settings);
    return (
        <IntlProvider locale={locales[locale].locale} messages={locales[locale].messages}>
            {children}
        </IntlProvider>
    );
};

export default LocaleProvider;
