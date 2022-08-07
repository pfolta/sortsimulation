import { defaultLocale, matchLocale } from "@/app/locale";

describe("Locale", () => {
    describe("matchLocale", () => {
        it("returns 'en' for an English locale", () => {
            expect(matchLocale(["en-US", "en"])).toBe("en");
            expect(matchLocale(["en-GB"])).toBe("en");
            expect(matchLocale(["en"])).toBe("en");
        });

        it("returns 'de' for a German locale", () => {
            expect(matchLocale(["de-DE", "de"])).toBe("de");
            expect(matchLocale(["de-AT"])).toBe("de");
            expect(matchLocale(["de"])).toBe("de");
        });

        it("returns the first supported locale in the user preference list", () => {
            expect(matchLocale(["fr-FR", "fr", "de-DE", "en", "en-US", "de"])).toBe("de");
        });

        it("returns the first partially matched locale in the user preference list", () => {
            expect(matchLocale(["fr-FR", "fr", "de-AT", "en", "en-US"])).toBe("de");
        });

        it("returns the default locale if no supplied user locale is supported", () => {
            expect(matchLocale(["fr-CA", "fr", "fr-FR"])).toBe(defaultLocale);
        });
    });
});
