import React from "react";

import renderWithProviders from "../../../utils/renderWithProviders";

import { NumberElement, StyledNumberElementLabel } from "@/app/components/ArrayViewElement";

describe("NumberElement", () => {
    const array = [4, 2, 5, 1, 3];
    const maxValue = Math.max(...array);
    const color = "gray";

    it("renders correctly", () => {
        array
            .map((value) => renderWithProviders(<NumberElement value={value} maxValue={maxValue} color={color} />))
            .forEach((element) => expect(element.toJSON()).toMatchSnapshot());
    });

    it("uses the specified color", () => {
        array
            .map((value) => renderWithProviders(<NumberElement value={value} maxValue={maxValue} color="blue" />))
            .forEach((element) => expect(element.toJSON()).toMatchSnapshot());
    });

    it("displays the correct element value", () => {
        array
            .map((value) => renderWithProviders(<NumberElement value={value} maxValue={maxValue} color={color} />))
            .forEach((element, i) => expect(element.root.findByType(StyledNumberElementLabel).props.children).toEqual(array[i]));
    });
});
