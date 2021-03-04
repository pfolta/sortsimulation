import React, { StrictMode } from "react";
import { FormattedMessage, RawIntlProvider } from "react-intl";
import styled from "styled-components";

import locales from "@/app/locale";

const Header = styled.header`
    background-color: peachpuff;
`;

const App = (): JSX.Element => (
    <StrictMode>
        <RawIntlProvider value={locales["de-DE"]}>
            <Header>
                <h1>
                    <FormattedMessage id="welcome.title" />
                </h1>
            </Header>
        </RawIntlProvider>
    </StrictMode>
);

export default App;
