import React, { StrictMode } from "react";
import { RawIntlProvider } from "react-intl";

import { ArrayView } from "@/app/components/ArrayView";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { GlobalStyle } from "@/app/global";
import locales from "@/app/locale";
import { createRandom } from "@/app/utils/array";

const App = (): JSX.Element => {
    return (
        <StrictMode>
            <RawIntlProvider value={locales["de-DE"]}>
                <GlobalStyle />
                <Header />
                <ArrayView array={createRandom(25)} />
                <Footer />
            </RawIntlProvider>
        </StrictMode>
    );
};

export default App;
