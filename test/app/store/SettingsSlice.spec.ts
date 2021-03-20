import { SettingsReducer, SettingsState, setTheme, toggleTheme } from "@/app/store";
import { themes } from "@/app/theme";

describe("SettingsSlice", () => {
    describe("SettingsReducer", () => {
        describe("setTheme", () => {
            it("set the theme to the provided theme", () => {
                const currentState: SettingsState = { theme: themes.light };
                const nextState = SettingsReducer(currentState, setTheme(themes.dark));

                expect(nextState.theme).toEqual(themes.dark);
            });
        });

        describe("toggleTheme", () => {
            it("sets the theme to `light` if the current theme is `dark`", () => {
                const currentState: SettingsState = { theme: themes.dark };
                const nextState = SettingsReducer(currentState, toggleTheme());

                expect(nextState.theme).toEqual(themes.light);
            });

            it("sets the theme to `dark` if the current theme is `light`", () => {
                const currentState: SettingsState = { theme: themes.light };
                const nextState = SettingsReducer(currentState, toggleTheme());

                expect(nextState.theme).toEqual(themes.dark);
            });
        });
    });
});
