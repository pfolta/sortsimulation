import React, { memo } from "react";
import styled from "styled-components";

import { ArrayView, ArrayViewProps } from "@/app/components/ArrayView";
import { NumberElement } from "@/app/components/ArrayViewElement";

const StyledNumberArrayView = styled(ArrayView)`
    column-gap: 1px;
`;

const NumberArrayView = ({ array }: ArrayViewProps): JSX.Element => {
    const maxValue = Math.max(...array);

    return (
        <StyledNumberArrayView array={array}>
            {array.map((value, index) => (
                <NumberElement key={index} value={value} maxValue={maxValue} />
            ))}
        </StyledNumberArrayView>
    );
};

export default memo(NumberArrayView);
