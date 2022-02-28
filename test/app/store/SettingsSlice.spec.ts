import { SettingsReducer, SettingsState, initialState, setLocale, setTheme, toggleTheme } from "@/app/store";

describe("SettingsSlice", () => {
    describe("SettingsReducer", () => {
        describe("setLocale", () => {
            it("sets the locale to the provided locale", () => {
                const currentState: Partial<SettingsState> = { locale: "en-US" };
                const nextState = SettingsReducer({ ...initialState, ...currentState }, setLocale("de-DE"));

                expect(nextState.locale).toBe("de-DE");
            });
        });

        describe("setTheme", () => {
            it("sets the theme to the provided theme", () => {
                const currentState: Partial<SettingsState> = { theme: "light" };
                const nextState = SettingsReducer({ ...initialState, ...currentState }, setTheme("dark"));

                expect(nextState.theme).toBe("dark");
            });
        });

        describe("toggleTheme", () => {
            it("sets the theme to 'light' if the current theme is 'dark'", () => {
                const currentState: Partial<SettingsState> = { theme: "dark" };
                const nextState = SettingsReducer({ ...initialState, ...currentState }, toggleTheme());

                expect(nextState.theme).toBe("light");
            });

            it("sets the theme to 'dark' if the current theme is 'light'", () => {
                const currentState: Partial<SettingsState> = { theme: "light" };
                const nextState = SettingsReducer({ ...initialState, ...currentState }, toggleTheme());

                expect(nextState.theme).toBe("dark");
            });
        });
    });
});
