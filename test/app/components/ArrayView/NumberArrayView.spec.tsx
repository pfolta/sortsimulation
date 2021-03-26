import React from "react";

import renderWithProviders from "../../../utils/renderWithProviders";

import { NumberArrayView } from "@/app/components/ArrayView";
import { StyledNumberElement } from "@/app/components/ArrayViewElement";
import { palette } from "@/app/theme";
import "@/app/utils/ArrayConstructor";

describe("NumberArrayView", () => {
    const array = [4, 2, 5, 1, 3];
    const maxValue = Math.max(...array);
    const colors = Array.range(array).map((index) => palette[index % palette.length]);

    it("renders correctly", () => {
        const component = renderWithProviders(<NumberArrayView array={array} colors={colors} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders a StyledNumberElement for every array element in the correct order", () => {
        const component = renderWithProviders(<NumberArrayView array={array} colors={colors} />);
        const elements = component.root.findAllByType(StyledNumberElement);

        expect(elements).toHaveLength(array.length);

        elements.forEach((element, index) => {
            expect(element.props.value).toBe(array[index]);
            expect(element.props.maxValue).toBe(maxValue);
        });
    });
});
