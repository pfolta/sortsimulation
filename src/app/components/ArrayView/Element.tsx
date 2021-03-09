import React from "react";
import Measure from "react-measure";
import styled from "styled-components";

interface ElementProps {
    array: number[];
    index: number;
    maxValue: number;
}

interface StyledElementProps extends ElementProps {
    contentWidth?: number;
}

const StyledElement = styled.div.attrs<StyledElementProps>(({ array, index, maxValue, contentWidth }) => ({
    style: {
        fontSize: computeFontSize(contentWidth) + "px",
        height: (array[index] / maxValue) * 100 + "%"
    }
}))<StyledElementProps>`
    background-color: #4c566a;
    color: white;

    overflow: hidden;

    font-size: 0;
    text-align: center;

    :hover {
        background-color: #ebcb8b;
    }
`;

const computeFontSize = (width?: number): number => {
    const size = width ? width / 2 : 0;
    return size < 8 ? 0 : size;
};

const Element = (props: ElementProps): JSX.Element => (
    <Measure>
        {({ contentRect, measureRef }) => (
            <StyledElement ref={measureRef} {...props} contentWidth={contentRect.entry?.width}>
                {props.array[props.index]}
            </StyledElement>
        )}
    </Measure>
);

export default Element;
export { StyledElement };
export { ElementProps };
