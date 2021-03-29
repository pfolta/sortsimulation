import React, { memo } from "react";
import styled from "styled-components";

import { ArrayView, ArrayViewProps } from "@/app/components/ArrayView";
import { NumberElement } from "@/app/components/ArrayViewElement";
import { Palette } from "@/app/theme";

interface NumberArrayViewProps extends ArrayViewProps {
    colorMap: Palette[];
}

const StyledNumberArrayView = styled(ArrayView)`
    column-gap: 1px;
`;

const NumberArrayView = ({ array, colorMap, ...delegated }: NumberArrayViewProps): JSX.Element => {
    const maxValue = Math.max(...array);

    return (
        <StyledNumberArrayView array={array}>
            {array.map((value, index) => (
                <NumberElement key={index} value={value} maxValue={maxValue} color={colorMap[index]} {...delegated} />
            ))}
        </StyledNumberArrayView>
    );
};

export default memo(NumberArrayView);
