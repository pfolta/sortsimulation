import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
    background-color: peachpuff;
`;

const Header = (): JSX.Element => (
    <Wrapper>
        <h1>SortSimulation</h1>
    </Wrapper>
);

export default Header;
