import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
    background-color: #e5e9f0;
    color: #4c566a;

    padding: 1rem;
`;

const Footer = (): JSX.Element => <Wrapper>© Peter Folta. All rights reserved.</Wrapper>;

export default Footer;
