import React from "react";
import { create, ReactTestRendererJSON } from "react-test-renderer";

import { ImageElement } from "@/app/components/ArrayViewElement";

describe("ImageElement", () => {
    const image = "/path/to/image.jpg";

    it("renders correctly", () => {
        const element = create(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(element.toJSON()).toMatchSnapshot();
    });

    it("uses the specified image as a background image", () => {
        const element = create(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(element.toJSON()).toHaveStyleRule("background-image", `url("${image}")`);
    });

    it("renders element grayed out if `grayscale` is set to 'true'", () => {
        const element = create(<ImageElement value={4} size={5} image={image} grayscale={true} />);
        expect(element.toJSON()).toHaveStyleRule("filter", "grayscale(100%)");
    });

    it("renders element in color if `grayscale` is set to 'false'", () => {
        const element = create(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(element.toJSON()).toHaveStyleRule("filter", "grayscale(0%)");
    });

    it("sizes the image according to the number of elements in the array", () => {
        const element = create(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(element.toJSON()).toHaveStyleRule("background-size", "500% 100%");
    });

    it("positions the image relative to the value provided", () => {
        const element = create(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect((element.toJSON() as ReactTestRendererJSON).props.style.backgroundPosition).toBe("75% 0%");
    });
});
