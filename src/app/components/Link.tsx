import styled from "styled-components";

const Link = styled.a`
    color: ${({ theme }) => theme.colors[theme.link.color]};
    cursor: pointer;

    :hover {
        text-decoration: none;
    }
`;

const ExternalLink = styled(Link).attrs({
    target: "_blank",
    rel: "noreferrer"
})``;

export { Link, ExternalLink };
