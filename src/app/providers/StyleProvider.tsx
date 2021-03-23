import React, { ReactNode, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "typeface-inter";

import { useDarkMode, useDispatch, useSelector } from "@/app/hooks";
import { setTheme } from "@/app/store";
import { themes } from "@/app/theme";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: inherit;
        margin: 0;
        padding: 0;
        user-select: none;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font: normal 100%/1.5 "Inter", sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.body.background};
        color: ${({ theme }) => theme.colors.gray1};

        cursor: default;
    }

    h3 {
        color: ${({ theme }) => theme.colors.gray3};
        text-transform: uppercase;
        font-size: 1rem;
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
