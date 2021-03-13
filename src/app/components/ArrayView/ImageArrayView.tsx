import React, { memo } from "react";

import { ArrayView } from "@/app/components/ArrayView";
import { ImageElement } from "@/app/components/ArrayViewElement";

interface ImageArrayViewProps {
    array: number[];
    image: string;
}

const ImageArrayView = ({ array, image }: ImageArrayViewProps): JSX.Element => (
    <ArrayView array={array}>
        {array.map((_, index) => (
            <ImageElement key={index} array={array} index={index} image={image} />
        ))}
    </ArrayView>
);

export default memo(ImageArrayView);
export { ImageArrayViewProps };
