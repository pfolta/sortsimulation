import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #e5e9f0;
    color: #4c566a;

    font-size: 0.875rem;

    padding: 1rem;
`;

const Footer = (): JSX.Element => <StyledFooter>© Peter Folta. All rights reserved.</StyledFooter>;

export default Footer;
