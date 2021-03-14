import React from "react";
import { create } from "react-test-renderer";

import { ImageElement } from "@/app/components/ArrayViewElement";

describe("ImageElement", () => {
    const array = [4, 2, 5, 1, 3];
    const image = "/path/to/image.jpg";

    it("renders correctly", () => {
        array
            .map((value) => create(<ImageElement value={value} size={array.length} image={image} />))
            .forEach((element) => expect(element.toJSON()).toMatchSnapshot());
    });

    it("uses the specified image as a background image", () => {
        array
            .map((value) => create(<ImageElement value={value} size={array.length} image={image} />))
            .forEach((element) => expect(element.toJSON()).toHaveStyleRule("background-image", `url("${image}")`));
    });

    it("sizes the image according to the number of elements in the array", () => {
        array
            .map((value) => create(<ImageElement value={value} size={array.length} image={image} />))
            .forEach((element) => expect(element.toJSON()).toHaveStyleRule("background-size", `${array.length * 100}% 100%`));
    });
});
