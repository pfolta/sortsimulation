import React from "react";
import { create } from "react-test-renderer";

import { ImageArrayView } from "@/app/components/ArrayView";
import { StyledImageElement } from "@/app/components/ArrayViewElement";

describe("ImageArrayView", () => {
    const array = [4, 2, 5, 1, 3];
    const image = "/path/to/image.jpg";

    it("renders correctly", () => {
        const component = create(<ImageArrayView array={array} image={image} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders a StyledImageElement for every array element in the correct order", () => {
        const component = create(<ImageArrayView array={array} image={image} />);
        const arrayElements = component.root.findAllByType(StyledImageElement);

        expect(arrayElements).toHaveLength(array.length);

        arrayElements.forEach((bar, index) => {
            expect(bar.props.array).toBe(array);
            expect(bar.props.index).toBe(index);
        });
    });
});
