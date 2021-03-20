import { SettingsReducer, SettingsState, initialState, setTheme, toggleTheme } from "@/app/store";

describe("SettingsSlice", () => {
    describe("SettingsReducer", () => {
        describe("setTheme", () => {
            it("sets the theme to the provided theme", () => {
                const currentState: Partial<SettingsState> = { theme: "light" };
                const nextState = SettingsReducer({ ...initialState, ...currentState }, setTheme("dark"));

                expect(nextState.theme).toEqual("dark");
            });
        });

        describe("toggleTheme", () => {
            it("sets the theme to `light` if the current theme is `dark`", () => {
                const currentState: Partial<SettingsState> = { theme: "dark" };
                const nextState = SettingsReducer({ ...initialState, ...currentState }, toggleTheme());

                expect(nextState.theme).toEqual("light");
            });

            it("sets the theme to `dark` if the current theme is `light`", () => {
                const currentState: Partial<SettingsState> = { theme: "light" };
                const nextState = SettingsReducer({ ...initialState, ...currentState }, toggleTheme());

                expect(nextState.theme).toEqual("dark");
            });
        });
    });
});
