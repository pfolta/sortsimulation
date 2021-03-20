import React, { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "typeface-inter";

import { useSelector } from "@/app/hooks";
import { themes } from "@/app/theme";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: inherit;
        margin: 0;
        padding: 0;
        user-select: none;
    }

    html {
        font: normal 100%/1.5 "Inter", sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.body.background};
        transition: background-color 250ms linear;
    }
`;

interface StyleProviderProps {
    children?: ReactNode;
}

const StyleProvider = ({ children }: StyleProviderProps): JSX.Element => {
    const { theme } = useSelector((state) => state.settings);

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default StyleProvider;
