import React from "react";
import { create } from "react-test-renderer";

import { NumberArrayView } from "@/app/components/ArrayView";
import { StyledNumberElement } from "@/app/components/ArrayViewElement";

describe("NumberArrayView", () => {
    const array = [4, 2, 5, 1, 3];
    const maxValue = Math.max(...array);

    it("renders correctly", () => {
        const component = create(<NumberArrayView array={array} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders a StyledNumberElement for every array element in the correct order", () => {
        const component = create(<NumberArrayView array={array} />);
        const elements = component.root.findAllByType(StyledNumberElement);

        expect(elements).toHaveLength(array.length);

        elements.forEach((element, index) => {
            expect(element.props.value).toBe(array[index]);
            expect(element.props.maxValue).toBe(maxValue);
        });
    });
});
