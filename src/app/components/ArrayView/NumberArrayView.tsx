import React, { memo } from "react";

import { ArrayView } from "@/app/components/ArrayView";
import { NumberElement } from "@/app/components/ArrayViewElement";

interface NumberArrayViewProps {
    array: number[];
}

const NumberArrayView = ({ array }: NumberArrayViewProps): JSX.Element => {
    const maxValue = Math.max(...array);

    return (
        <ArrayView array={array}>
            {array.map((_, index) => (
                <NumberElement key={index} array={array} index={index} maxValue={maxValue} />
            ))}
        </ArrayView>
    );
};

export default memo(NumberArrayView);
export { NumberArrayViewProps };
