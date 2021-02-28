import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const Header = styled.header`
    background-color: peachpuff;
`;

const App = (): JSX.Element => (
    <Header>
        <h1>
            <FormattedMessage id="welcome.title" />
        </h1>
    </Header>
);

export default App;
