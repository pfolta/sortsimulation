import React from "react";

import renderWithProviders from "../../../utils/renderWithProviders";

import { ImageArrayView } from "@/app/components/ArrayView";

describe("ImageArrayView", () => {
    const array = [4, 2, 5, 1, 3];
    const image = "/path/to/image.jpg";
    const grayscaleMap = [true, true, true, false, false];

    it("renders correctly", () => {
        const { asFragment } = renderWithProviders(<ImageArrayView array={array} image={image} grayscaleMap={grayscaleMap} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders an ImageElement for every array element in the correct order", () => {
        const { container } = renderWithProviders(<ImageArrayView array={array} image={image} grayscaleMap={grayscaleMap} />);
        const elements = container.firstChild?.childNodes;

        expect(elements).toHaveLength(array.length);

        elements?.forEach((element, index) => {
            expect(element).toHaveAttribute("data-value", array[index].toString());
        });
    });

    it("applies the grayscaleMap in the correct order", () => {
        const { container } = renderWithProviders(<ImageArrayView array={array} image={image} grayscaleMap={grayscaleMap} />);
        const elements = container.firstChild?.childNodes;

        expect(elements).toHaveLength(array.length);

        elements?.forEach((element, index) => {
            expect(element).toHaveStyle(`filter: grayscale(${grayscaleMap[index] ? "100" : "0"}%)`);
        });
    });
});
