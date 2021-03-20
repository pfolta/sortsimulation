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

interface Theme {
    name: string;
    body: {
        background: string;
    };
    colors: Color;
}

const themes = {
    dark: darkTheme,
    light: lightTheme
};

export default Theme;
export { Color, themes };
