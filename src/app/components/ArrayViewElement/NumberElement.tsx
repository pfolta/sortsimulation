import React, { memo } from "react";
import Measure from "react-measure";
import styled from "styled-components";

import { ArrayViewElement, ArrayViewElementProps } from "@/app/components/ArrayViewElement";

interface NumberElementProps extends ArrayViewElementProps {
    maxValue: number;
}

interface StyledNumberElementProps extends NumberElementProps {
    contentWidth?: number;
}

const StyledNumberElement = styled(ArrayViewElement).attrs<StyledNumberElementProps>(({ value, maxValue, contentWidth }) => ({
    style: {
        fontSize: (contentWidth || 0) / 2 + "px",
        height: (value / maxValue) * 100 + "%"
    }
}))<StyledNumberElementProps>`
    background-color: #4c566a;
    color: white;

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
                <StyledNumberElementLabel>{props.value}</StyledNumberElementLabel>
            </StyledNumberElement>
        )}
    </Measure>
);

export default memo(NumberElement);
export { NumberElementProps, StyledNumberElement, StyledNumberElementLabel };
