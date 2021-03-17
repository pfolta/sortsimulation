import { createGlobalStyle } from "styled-components";
import "typeface-inter";

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
`;

export default GlobalStyle;
