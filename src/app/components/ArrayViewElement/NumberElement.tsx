import React from "react";
import Measure from "react-measure";
import styled from "styled-components";

import { ArrayViewElement, ArrayViewElementProps } from "@/app/components/ArrayViewElement";

interface NumberElementProps extends ArrayViewElementProps {
    maxValue: number;
}

interface StyledNumberElementProps extends NumberElementProps {
    contentWidth?: number;
}

const StyledNumberElement = styled(ArrayViewElement).attrs<StyledNumberElementProps>(({ contentWidth }) => ({
    style: {
        fontSize: (contentWidth || 0) / 2 + "px"
    }
}))<StyledNumberElementProps>`
    height: ${({ array, index, maxValue }) => (array[index] / maxValue) * 100}%;
    font-size: 0;
    text-align: center;
`;

const StyledNumberElementLabel = styled.span`
    display: block;
    height: 100%;
    overflow: hidden;
`;

const NumberElement = (props: NumberElementProps): JSX.Element => (
    <Measure>
        {({ contentRect, measureRef }) => (
            <StyledNumberElement ref={measureRef} {...props} contentWidth={contentRect.entry?.width}>
                <StyledNumberElementLabel>{props.array[props.index]}</StyledNumberElementLabel>
            </StyledNumberElement>
        )}
    </Measure>
);

export default NumberElement;
export { NumberElementProps, StyledNumberElement, StyledNumberElementLabel };
