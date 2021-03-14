import React from "react";
import { create } from "react-test-renderer";

import { NumberElement, StyledNumberElementLabel } from "@/app/components/ArrayViewElement";

describe("NumberElement", () => {
    const array = [4, 2, 5, 1, 3];
    const maxValue = Math.max(...array);

    it("renders correctly", () => {
        array
            .map((value) => create(<NumberElement value={value} maxValue={maxValue} />))
            .forEach((element) => expect(element.toJSON()).toMatchSnapshot());
    });

    it("displays the correct element value", () => {
        array
            .map((value) => create(<NumberElement value={value} maxValue={maxValue} />))
            .forEach((element, i) => expect(element.root.findByType(StyledNumberElementLabel).props.children).toEqual(array[i]));
    });
});
