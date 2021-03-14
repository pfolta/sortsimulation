import React, { memo } from "react";
import styled from "styled-components";

import { ArrayViewElement, ArrayViewElementProps } from "@/app/components/ArrayViewElement";

interface ImageElementProps extends ArrayViewElementProps {
    size: number;
    image: string;
}

const StyledImageElement = styled(ArrayViewElement).attrs<ImageElementProps>(({ value, size }) => ({
    style: {
        backgroundPosition: ((value - 1) / (size - 1)) * 100 + "% 0%"
    }
}))<ImageElementProps>`
    background-image: url("${({ image }) => image}");
    background-repeat: no-repeat;
    background-size: ${({ size }) => size * 100}% 100%;

    height: 100%;
`;

const ImageElement = (props: ImageElementProps): JSX.Element => <StyledImageElement {...props} />;

export default memo(ImageElement);
export { ImageElementProps, StyledImageElement };
