import React from "react";

import renderWithProviders from "../../../utils/renderWithProviders";

import { ImageElement } from "@/app/components/ArrayViewElement";

describe("ImageElement", () => {
    const image = "/path/to/image.jpg";

    it("renders correctly", () => {
        const { asFragment } = renderWithProviders(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("uses the specified image as a background image", () => {
        const { container } = renderWithProviders(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(container.firstChild).toHaveStyle(`background-image: url("${image}")`);
    });

    it("renders element grayed out if `grayscale` is set to 'true'", () => {
        const { container } = renderWithProviders(<ImageElement value={4} size={5} image={image} grayscale={true} />);
        expect(container.firstChild).toHaveStyle("filter: grayscale(100%)");
    });

    it("renders element in color if `grayscale` is set to 'false'", () => {
        const { container } = renderWithProviders(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(container.firstChild).toHaveStyle("filter: grayscale(0%)");
    });

    it("sizes the image according to the number of elements in the array", () => {
        const { container } = renderWithProviders(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(container.firstChild).toHaveStyle("background-size: 500% 100%");
    });

    it("positions the image relative to the value provided", () => {
        const { container } = renderWithProviders(<ImageElement value={4} size={5} image={image} grayscale={false} />);
        expect(container.firstChild).toHaveStyle("background-position: 75% 0%");
    });
});
