import React from "react";
import { create } from "react-test-renderer";

import { ImageElement } from "@/app/components/ArrayViewElement";

describe("ImageElement", () => {
    const array = [4, 2, 5, 1, 3];
    const image = "/path/to/image.jpg";

    it("renders correctly", () => {
        const component = create(<ImageElement array={array} index={1} image={image} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("uses the specified image as a background image", () => {
        const imageElement = create(<ImageElement array={array} index={2} image={image} />);
        expect(imageElement.toJSON()).toHaveStyleRule("background-image", `url("${image}")`);
    });

    it("sizes the image according to the number of elements in the array", () => {
        const imageElement = create(<ImageElement array={array} index={1} image={image} />);
        expect(imageElement.toJSON()).toHaveStyleRule("background-size", "500% 100%");
    });
});
