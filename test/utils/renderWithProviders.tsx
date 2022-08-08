import { render } from "@testing-library/react";
import React, { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { DefaultTheme, ThemeProvider } from "styled-components";

import enMessages from "@/resources/lang/en.json";
import lightTheme from "@/resources/themes/light.json";

const renderWithProviders = (component: ReactNode) =>
    render(
        <IntlProvider locale="en" messages={enMessages}>
            <ThemeProvider theme={lightTheme as DefaultTheme}>{component}</ThemeProvider>
        </IntlProvider>
    );

export default renderWithProviders;
