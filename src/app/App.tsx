import React, { StrictMode } from "react";
import { RawIntlProvider } from "react-intl";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { GlobalStyle } from "@/app/global";
import locales from "@/app/locale";

const App = (): JSX.Element => {
    return (
        <StrictMode>
            <RawIntlProvider value={locales["de-DE"]}>
                <GlobalStyle />
                <Header />
                <Footer />
            </RawIntlProvider>
        </StrictMode>
    );
};

export default App;
