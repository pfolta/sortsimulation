import React from "react";
import { create } from "react-test-renderer";

import { NumberArrayView } from "@/app/components/ArrayView";
import { NumberElement } from "@/app/components/ArrayViewElement";

describe("NumberArrayView", () => {
    const array = [4, 2, 5, 1, 3];

    it("renders correctly", () => {
        const component = create(<NumberArrayView array={array} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders a NumberElement for every array element in the correct order", () => {
        const component = create(<NumberArrayView array={array} />);
        const arrayElements = component.root.findAllByType(NumberElement);

        expect(arrayElements).toHaveLength(array.length);

        arrayElements.forEach((bar, index) => {
            expect(bar.props.array).toBe(array);
            expect(bar.props.index).toBe(index);
        });
    });
});
