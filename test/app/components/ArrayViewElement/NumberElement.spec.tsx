import React from "react";
import { create } from "react-test-renderer";

import { NumberElement, StyledNumberElementLabel } from "@/app/components/ArrayViewElement";

describe("NumberElement", () => {
    const array = [4, 2, 5, 1, 3];
    const maxValue = Math.max(...array);

    it("renders correctly", () => {
        array
            .map((_, i) => create(<NumberElement array={array} index={i} maxValue={maxValue} />))
            .forEach((element) => expect(element.toJSON()).toMatchSnapshot());
    });

    it("computes the element height relative to the largest array element", () => {
        array
            .map((_, i) => create(<NumberElement array={array} index={i} maxValue={maxValue} />))
            .forEach((element, i) => expect(element.toJSON()).toHaveStyleRule("height", `${(array[i] / maxValue) * 100}%`));
    });

    it("displays the correct element value", () => {
        array
            .map((_, i) => create(<NumberElement array={array} index={i} maxValue={maxValue} />))
            .forEach((element, i) => expect(element.root.findByType(StyledNumberElementLabel).props.children).toEqual(array[i]));
    });
});
