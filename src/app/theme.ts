import darkTheme from "@/resources/themes/dark.json";
import lightTheme from "@/resources/themes/light.json";

interface Color {
    "black-100": string;
    "black-300": string;
    "black-500": string;
    "black-700": string;
    "black-900": string;
    "blue-100": string;
    "blue-300": string;
    "blue-500": string;
    "blue-700": string;
    "blue-900": string;
    "gray-100": string;
    "gray-300": string;
    "gray-500": string;
    "gray-700": string;
    "gray-900": string;
    "green-100": string;
    "green-300": string;
    "green-500": string;
    "green-700": string;
    "green-900": string;
    "orange-100": string;
    "orange-300": string;
    "orange-500": string;
    "orange-700": string;
    "orange-900": string;
    "pink-100": string;
    "pink-300": string;
    "pink-500": string;
    "pink-700": string;
    "pink-900": string;
    "purple-100": string;
    "purple-300": string;
    "purple-500": string;
    "purple-700": string;
    "purple-900": string;
    "red-100": string;
    "red-300": string;
    "red-500": string;
    "red-700": string;
    "red-900": string;
    "teal-100": string;
    "teal-300": string;
    "teal-500": string;
    "teal-700": string;
    "teal-900": string;
    "white-100": string;
    "white-300": string;
    "white-500": string;
    "white-700": string;
    "white-900": string;
    "yellow-100": string;
    "yellow-300": string;
    "yellow-500": string;
    "yellow-700": string;
    "yellow-900": string;
}

const palette = ["blue", "gray", "green", "orange", "pink", "purple", "red", "teal", "yellow"] as const;

interface ThemeShape {
    body: {
        background: keyof Color;
        color: keyof Color;
    };
    colors: Color;
    focus: {
        boxShadow: string;
    };
    link: {
        color: keyof Color;
    };
    modal: {
        background: keyof Color;
        close: {
            background: keyof Color;
            color: keyof Color;
            hover: {
                background: keyof Color;
                color: keyof Color;
            };
            active: {
                background: keyof Color;
                color: keyof Color;
            };
        };
        "margin-top": string;
        overlay: keyof Color;
        padding: string;
    };
    "number-element": {
        "background-base-weight": number;
        "background-top-weight": number;
        "background-bottom-weight": number;
        "border-inside-weight": number;
        "border-outside-weight": number;
        "text-color-weight": number;
        "text-shadow-weight": number;
    };
    typography: {
        subheading: {
            color: keyof Color;
        };
    };
}

const themes = {
    dark: darkTheme as ThemeShape,
    light: lightTheme as ThemeShape
};

export { palette, themes };
export type { Color, ThemeShape };
export type Palette = typeof palette[number];
export type Theme = keyof typeof themes;
