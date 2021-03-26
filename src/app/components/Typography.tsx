import styled from "styled-components";

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;

const Heading = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
    color: ${({ theme }) => theme.colors[theme.typography.subheading.color]};
    font-weight: bold;
    text-transform: uppercase;
`;

const Paragraph = styled.p`
    margin-bottom: 1rem;

    :last-child {
        margin-bottom: 0;
    }
`;

export { Title, Heading, SubHeading, Paragraph };
