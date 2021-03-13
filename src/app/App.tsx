import React, { StrictMode } from "react";
import { RawIntlProvider } from "react-intl";

import { ImageArrayView, NumberArrayView } from "@/app/components/ArrayView";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { GlobalStyle } from "@/app/global";
import locales from "@/app/locale";
import "@/app/utils/ArrayConstructor";
import image from "@/resources/image.jpg";

const App = (): JSX.Element => {
    const array = Array.random(25);

    return (
        <StrictMode>
            <RawIntlProvider value={locales["de-DE"]}>
                <GlobalStyle />
                <Header />
                <ImageArrayView array={array} image={image} />
                <NumberArrayView array={array} />
                <Footer />
            </RawIntlProvider>
        </StrictMode>
    );
};

export default App;
