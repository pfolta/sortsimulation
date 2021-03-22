import darkTheme from "@/resources/themes/dark.json";
import lightTheme from "@/resources/themes/light.json";

interface Color {
    blue: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    green: string;
    orange: string;
    purple: string;
    red: string;
    yellow: string;
}

interface ThemeShape {
    body: {
        background: string;
    };
    colors: Color;
    focus: {
        boxShadow: string;
    };
    modal: {
        background: string;
        marginTop: string;
        maxWidth: string;
        padding: string;
    };
}

const themes = {
    dark: darkTheme,
    light: lightTheme
};

export { themes };
export type { Color, ThemeShape };
export type Theme = keyof typeof themes;
