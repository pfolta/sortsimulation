import styled from "styled-components";

const ExternalLink = styled.a.attrs({
    target: "_blank",
    rel: "noreferrer"
})`
    :hover {
        text-decoration: none;
    }
`;

export default ExternalLink;
