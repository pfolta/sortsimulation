import React from "react";
import { create } from "react-test-renderer";

import { NumberElement, StyledNumberElementLabel } from "@/app/components/ArrayViewElement";

describe("NumberElement", () => {
    const array = [4, 2, 5, 1, 3];
    const maxValue = Math.max(...array);

    it("renders correctly", () => {
        const component = create(<NumberElement array={array} index={1} maxValue={maxValue} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("displays the correct element value", () => {
        const component = create(<NumberElement array={array} index={2} maxValue={maxValue} />);
        expect(component.root.findByType(StyledNumberElementLabel).props.children).toEqual(5);
    });
});
