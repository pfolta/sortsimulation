import React, { memo } from "react";
import Measure from "react-measure";
import styled from "styled-components";

import { ArrayViewElement, ArrayViewElementProps } from "@/app/components/ArrayViewElement";
import { Color, Palette } from "@/app/theme";

interface NumberElementProps extends ArrayViewElementProps {
    color: Palette;
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
    background-color: ${({ color, theme }) => theme.colors[`${color}-${theme["number-element"]["background-base-weight"]}` as keyof Color]};
    background-image: linear-gradient(
        to bottom,
        ${({ color, theme }) => theme.colors[`${color}-${theme["number-element"]["background-top-weight"]}` as keyof Color]},
        ${({ color, theme }) => theme.colors[`${color}-${theme["number-element"]["background-bottom-weight"]}` as keyof Color]}
    );
    box-shadow: 0 0 0 1px
            ${({ color, theme }) => theme.colors[`${color}-${theme["number-element"]["border-outside-weight"]}` as keyof Color]} inset,
        0 0 0 2px ${({ color, theme }) => theme.colors[`${color}-${theme["number-element"]["border-inside-weight"]}` as keyof Color]} inset;

    color: ${({ color, theme }) => theme.colors[`${color}-${theme["number-element"]["text-color-weight"]}` as keyof Color]};
    text-shadow: 0 1px 0 ${({ color, theme }) => theme.colors[`${color}-${theme["number-element"]["text-shadow-weight"]}` as keyof Color]};

    font-size: 0;
    font-weight: bold;
    text-align: center;

    padding-top: 0.2em;
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
