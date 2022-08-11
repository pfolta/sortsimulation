import { render } from "@testing-library/react";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Locale } from "@/app/locale";
import { LocaleProvider, StoreProvider } from "@/app/providers";

describe("LocaleProvider", () => {
    it("uses the store-provided locale", () => {
        const { container } = render(
            <StoreProvider>
                <LocaleProvider>
                    <FormattedMessage id="settings" />
                </LocaleProvider>
            </StoreProvider>
        );

        expect(container).toHaveTextContent("Settings");
    });

    it("uses the custom locale when provided", () => {
        const locale: Locale = "de";

        const { container } = render(
            <StoreProvider>
                <LocaleProvider locale={locale}>
                    <FormattedMessage id="settings" />
                </LocaleProvider>
            </StoreProvider>
        );

        expect(container).toHaveTextContent("Einstellungen");
    });

    describe("controls the HTML `lang` attribute", () => {
        it("does not set attribute by default", () => {
            const locale: Locale = "de";

            render(
                <StoreProvider>
                    <LocaleProvider locale={locale} />
                </StoreProvider>
            );

            expect(document.documentElement).not.toHaveAttribute("lang");
        });

        it("sets the attribute correctly when requested", () => {
            const locale: Locale = "de";

            render(
                <StoreProvider>
                    <LocaleProvider locale={locale} setHtmlLangAttribute />
                </StoreProvider>
            );

            expect(document.documentElement).toHaveAttribute("lang", locale);
        });

        it("removes the attribute when unmounted", () => {
            const locale: Locale = "de";

            const { unmount } = render(
                <StoreProvider>
                    <LocaleProvider locale={locale} setHtmlLangAttribute />
                </StoreProvider>
            );

            expect(document.documentElement).toHaveAttribute("lang", locale);

            unmount();

            expect(document.documentElement).not.toHaveAttribute("lang");
        });
    });
});
