import styled from "styled-components";

interface ArrayViewProps {
    array: number[];
}

const ArrayView = styled.div<ArrayViewProps>`
    display: grid;
    grid-template-columns: repeat(${({ array }) => array.length}, 1fr);
    column-gap: 1px;
    align-items: end;

    height: 30vh;
`;

export default ArrayView;
export { ArrayViewProps };
