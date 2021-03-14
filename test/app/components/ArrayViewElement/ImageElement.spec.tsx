import React from "react";
import { create } from "react-test-renderer";

import { ImageElement } from "@/app/components/ArrayViewElement";

describe("ImageElement", () => {
    const array = [4, 2, 5, 1, 3];
    const image = "/path/to/image.jpg";

    it("renders correctly", () => {
        array
            .map((_, i) => create(<ImageElement array={array} index={i} image={image} />))
            .forEach((element) => expect(element.toJSON()).toMatchSnapshot());
    });

    it("uses the specified image as a background image", () => {
        array
            .map((_, i) => create(<ImageElement array={array} index={i} image={image} />))
            .forEach((element) => expect(element.toJSON()).toHaveStyleRule("background-image", `url("${image}")`));
    });

    it("positions the image according to the array value at the given index", () => {
        array
            .map((_, i) => create(<ImageElement array={array} index={i} image={image} />))
            .forEach((element, i) =>
                expect(element.toJSON()).toHaveStyleRule("background-position", `${((array[i] - 1) / (array.length - 1)) * 100}% 0%`)
            );
    });

    it("sizes the image according to the number of elements in the array", () => {
        array
            .map((_, i) => create(<ImageElement array={array} index={i} image={image} />))
            .forEach((element) => expect(element.toJSON()).toHaveStyleRule("background-size", `${array.length * 100}% 100%`));
    });
});
