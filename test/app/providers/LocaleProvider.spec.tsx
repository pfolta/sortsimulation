import { render } from "@testing-library/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { FormattedMessage } from "react-intl";

import { Locale } from "@/app/locale";
import { LocaleProvider, StoreProvider } from "@/app/providers";

describe("LocaleProvider", () => {
    it("uses the store-provided locale", () => {
        const { container } = render(
            <StoreProvider>
                <HelmetProvider>
                    <LocaleProvider>
                        <FormattedMessage id="settings" />
                    </LocaleProvider>
                </HelmetProvider>
            </StoreProvider>
        );

        expect(container).toHaveTextContent("Settings");
    });

    it("uses the custom locale when provided", () => {
        const locale: Locale = "de";

        const { container } = render(
            <StoreProvider>
                <HelmetProvider>
                    <LocaleProvider locale={locale}>
                        <FormattedMessage id="settings" />
                    </LocaleProvider>
                </HelmetProvider>
            </StoreProvider>
        );

        expect(container).toHaveTextContent("Einstellungen");
    });
});
