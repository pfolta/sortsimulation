import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Locale } from "@/app/locale";
import { Theme, themes } from "@/app/theme";

interface SettingsState {
    locale: Locale;
    theme: Theme;
}

const initialState: SettingsState = {
    locale: "de-DE",
    theme: "light"
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<Locale>) => {
            state.locale = action.payload;
        },
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
        toggleTheme: (state) => {
            state.theme = themes[state.theme] === themes.dark ? "light" : "dark";
        }
    }
});

export default settingsSlice.reducer;
export const { setLocale, setTheme, toggleTheme } = settingsSlice.actions;
export { initialState };
export type { SettingsState };
