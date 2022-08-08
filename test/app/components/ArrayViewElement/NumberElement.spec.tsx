import React from "react";

import renderWithProviders from "../../../utils/renderWithProviders";

import { NumberElement } from "@/app/components/ArrayViewElement";

describe("NumberElement", () => {
    it("renders correctly", () => {
        const { asFragment } = renderWithProviders(<NumberElement value={4} maxValue={5} color="gray" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("uses the specified color", () => {
        const { asFragment } = renderWithProviders(<NumberElement value={4} maxValue={5} color="blue" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("displays the correct element value", () => {
        const { container } = renderWithProviders(<NumberElement value={4} maxValue={5} color="gray" />);
        expect(container).toHaveTextContent("4");
    });

    it("computes the correct height based on the maximum array element", () => {
        const { container } = renderWithProviders(<NumberElement value={4} maxValue={5} color="gray" />);
        expect(container.firstChild).toHaveStyle("height: 80%");
    });
});
