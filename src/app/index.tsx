import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RawIntlProvider } from "react-intl";

import App from "@/app/App";
import locales from "@/app/locale";

ReactDOM.render(
    <StrictMode>
        <RawIntlProvider value={locales["en-US"]}>
            <App />
        </RawIntlProvider>
    </StrictMode>,
    document.querySelector("#app")
);
