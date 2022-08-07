import React, { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { create, ReactTestRenderer } from "react-test-renderer";
import { DefaultTheme, ThemeProvider } from "styled-components";

import enMessages from "@/resources/lang/en.json";
import lightTheme from "@/resources/themes/light.json";

const renderWithProviders = (component: ReactNode): ReactTestRenderer =>
    create(
        <IntlProvider locale="en" messages={enMessages}>
            <ThemeProvider theme={lightTheme as DefaultTheme}>{component}</ThemeProvider>
        </IntlProvider>
    );

export default renderWithProviders;
