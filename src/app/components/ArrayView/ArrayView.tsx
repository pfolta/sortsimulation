import React, { useMemo } from "react";
import styled from "styled-components";

import { Element } from "@/app/components/ArrayView";

interface ArrayViewProps {
    array: number[];
}

const Wrapper = styled.div<ArrayViewProps>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.array.length}, 1fr);
    column-gap: 1px;
    align-items: end;

    height: 30vh;
`;

const ArrayView = ({ array }: ArrayViewProps): JSX.Element => {
    const maxValue = useMemo(() => Math.max(...array), [array]);

    return (
        <Wrapper array={array}>
            {array.map((_, index) => (
                <Element key={index} array={array} index={index} maxValue={maxValue} />
            ))}
        </Wrapper>
    );
};

export default ArrayView;
export { ArrayViewProps };
