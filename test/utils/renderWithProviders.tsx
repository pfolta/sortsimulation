import React, { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { create, ReactTestRenderer } from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import enUSMessages from "@/resources/lang/en-US.json";
import lightTheme from "@/resources/themes/light.json";

const renderWithProviders = (component: ReactNode): ReactTestRenderer =>
    create(
        <IntlProvider locale="en-US" messages={enUSMessages}>
            <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
        </IntlProvider>
    );

export default renderWithProviders;
