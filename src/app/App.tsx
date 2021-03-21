import React, { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";

import { ImageArrayView, NumberArrayView } from "@/app/components/ArrayView";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { LocaleProvider, StoreProvider, StyleProvider } from "@/app/providers";
import "@/app/utils/ArrayConstructor";
import image from "@/resources/image.jpg";

const App = (): JSX.Element => {
    const array = Array.random(25);

    return (
        <StrictMode>
            <StoreProvider>
                <HelmetProvider>
                    <LocaleProvider>
                        <StyleProvider>
                            <Header />
                            <ImageArrayView array={array} image={image} />
                            <NumberArrayView array={array} />
                            <Footer />
                        </StyleProvider>
                    </LocaleProvider>
                </HelmetProvider>
            </StoreProvider>
        </StrictMode>
    );
};

export default App;
