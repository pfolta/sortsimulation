import React from "react";

import renderWithProviders from "../../../utils/renderWithProviders";

import { NumberArrayView } from "@/app/components/ArrayView";
import { palette } from "@/app/theme";
import "@/app/utils/ArrayConstructor";

describe("NumberArrayView", () => {
    const array = [4, 2, 5, 1, 3];
    const colorMap = Array.range(array).map((index) => palette[index % palette.length]);

    it("renders correctly", () => {
        const { asFragment } = renderWithProviders(<NumberArrayView array={array} colorMap={colorMap} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders a NumberElement for every array element in the correct order", () => {
        const { container } = renderWithProviders(<NumberArrayView array={array} colorMap={colorMap} />);
        const elements = container.firstChild?.childNodes;

        expect(elements).toHaveLength(array.length);

        elements?.forEach((element, index) => {
            const value = array[index].toString();

            expect(element).toHaveAttribute("data-value", value);
            expect(element).toHaveTextContent(value);
        });
    });
});
