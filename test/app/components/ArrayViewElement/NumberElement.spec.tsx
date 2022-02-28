import React from "react";
import { ReactTestRendererJSON } from "react-test-renderer";

import renderWithProviders from "../../../utils/renderWithProviders";

import { NumberElement, StyledNumberElementLabel } from "@/app/components/ArrayViewElement";

describe("NumberElement", () => {
    it("renders correctly", () => {
        const element = renderWithProviders(<NumberElement value={4} maxValue={5} color="gray" />);
        expect(element.toJSON()).toMatchSnapshot();
    });

    it("uses the specified color", () => {
        const element = renderWithProviders(<NumberElement value={4} maxValue={5} color="blue" />);
        expect(element.toJSON()).toMatchSnapshot();
    });

    it("displays the correct element value", () => {
        const element = renderWithProviders(<NumberElement value={4} maxValue={5} color="gray" />);
        expect(element.root.findByType(StyledNumberElementLabel).props.children).toBe(4);
    });

    it("computes the correct height based on the maximum array element", () => {
        const element = renderWithProviders(<NumberElement value={4} maxValue={5} color="gray" />);
        expect((element.toJSON() as ReactTestRendererJSON).props.style.height).toBe("80%");
    });
});
