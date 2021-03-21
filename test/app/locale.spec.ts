import { DEFAULT_LOCALE, matchLocale } from "@/app/locale";

describe("Locale", () => {
    describe("matchLocale", () => {
        it("returns 'en-US' for an English locale", () => {
            expect(matchLocale(["en-US", "en"])).toBe("en-US");
            expect(matchLocale(["en-GB"])).toBe("en-US");
            expect(matchLocale(["en"])).toBe("en-US");
        });

        it("returns 'de-DE' for a German locale", () => {
            expect(matchLocale(["de-DE", "de"])).toBe("de-DE");
            expect(matchLocale(["de-AT"])).toBe("de-DE");
            expect(matchLocale(["de"])).toBe("de-DE");
        });

        it("returns the first supported locale in the user preference list", () => {
            expect(matchLocale(["fr-FR", "fr", "de-DE", "en", "en-US", "de"])).toBe("de-DE");
        });

        it("returns the first partially matched locale in the user preference list", () => {
            expect(matchLocale(["fr-FR", "fr", "de-AT", "en", "en-US"])).toBe("de-DE");
        });

        it("returns the default locale if no supplied user locale is supported", () => {
            expect(matchLocale(["fr-CA", "fr", "fr-FR"])).toBe(DEFAULT_LOCALE);
        });
    });
});
