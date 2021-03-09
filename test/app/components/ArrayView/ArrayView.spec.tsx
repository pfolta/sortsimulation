import React from "react";
import { create } from "react-test-renderer";

import ArrayView from "@/app/components/ArrayView/ArrayView";
import { StyledElement } from "@/app/components/ArrayView/Element";

describe("ArrayView", () => {
    const array = [4, 2, 5, 1, 3];

    it("renders correctly", () => {
        const component = create(<ArrayView array={array} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("renders every array element in the correct order", () => {
        const component = create(<ArrayView array={array} />);
        const arrayElements = component.root.findAllByType(StyledElement);

        expect(arrayElements).toHaveLength(array.length);
        arrayElements.forEach((bar, index) => expect(bar.props.children).toBe(array[index]));
    });
});
