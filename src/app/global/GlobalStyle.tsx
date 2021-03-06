import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        user-select: none;
    }

    html {
        font: normal 100%/1.5 sans-serif;
    }
`;

export default GlobalStyle;
