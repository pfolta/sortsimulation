import React, { memo } from "react";

import { ArrayView, ArrayViewProps } from "@/app/components/ArrayView";
import { ImageElement } from "@/app/components/ArrayViewElement";

interface ImageArrayViewProps extends ArrayViewProps {
    image: string;
}

const ImageArrayView = ({ array, image }: ImageArrayViewProps): JSX.Element => (
    <ArrayView array={array}>
        {array.map((value, index) => (
            <ImageElement key={index} value={value} size={array.length} image={image} />
        ))}
    </ArrayView>
);

export default memo(ImageArrayView);
export { ImageArrayViewProps };
