import React, { memo } from "react";
import styled from "styled-components";

import { ArrayViewElement, ArrayViewElementProps } from "@/app/components/ArrayViewElement";

interface ImageElementProps extends ArrayViewElementProps {
    grayscale: boolean;
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

    filter: grayscale(${({ grayscale }) => (grayscale ? "100%" : "0%")});

    height: 100%;

    /* Hack to trigger hardware acceleration in Safari and iOS, see
       http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/ */
    transform: translateZ(0);
`;

const ImageElement = (props: ImageElementProps): JSX.Element => <StyledImageElement {...props} />;

export default memo(ImageElement);
export { ImageElementProps, StyledImageElement };
