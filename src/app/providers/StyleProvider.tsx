import React, { ReactNode, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "typeface-inter";

import { useDarkMode, useDispatch, useSelector } from "@/app/hooks";
import { setTheme } from "@/app/store";
import { themes } from "@/app/theme";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;

        font: inherit;

        margin: 0;
        padding: 0;

        cursor: default;
        user-select: none;
    }

    html {
        font: normal 100%/1.4 "Inter", sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors[theme.body.background]};
        color: ${({ theme }) => theme.colors[theme.body.color]};
    }
`;

interface StyleProviderProps {
    children?: ReactNode;
}

const StyleProvider = ({ children }: StyleProviderProps): JSX.Element => {
    const { theme } = useSelector((state) => state.settings);
    const isDarkMode = useDarkMode();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTheme(isDarkMode ? "dark" : "light"));
    }, [isDarkMode, dispatch]);

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default StyleProvider;
