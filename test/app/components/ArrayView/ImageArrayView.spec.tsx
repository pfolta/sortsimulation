import React from "react";
import { create } from "react-test-renderer";

import { ImageArrayView } from "@/app/components/ArrayView";
import { StyledImageElement } from "@/app/components/ArrayViewElement";

describe("ImageArrayView", () => {
    const array = [4, 2, 5, 1, 3];
    const image = "/path/to/image.jpg";
    const grayscaleMap = [true, true, true, false, false];

    it("renders correctly", () => {
        const component = create(<ImageArrayView array={array} image={image} grayscaleMap={grayscaleMap} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders a StyledImageElement for every array element in the correct order", () => {
        const component = create(<ImageArrayView array={array} image={image} grayscaleMap={grayscaleMap} />);
        const elements = component.root.findAllByType(StyledImageElement);

        expect(elements).toHaveLength(array.length);

        elements.forEach((element, index) => {
            expect(element.props.value).toBe(array[index]);
            expect(element.props.size).toBe(array.length);
            expect(element.props.image).toBe(image);
        });
    });

    it("applies the grayscaleMap in the correct order", () => {
        const component = create(<ImageArrayView array={array} image={image} grayscaleMap={grayscaleMap} />);
        const elements = component.root.findAllByType(StyledImageElement);

        expect(elements).toHaveLength(array.length);

        elements.forEach((element, index) => expect(element.props.grayscale).toBe(grayscaleMap[index]));
    });
});
