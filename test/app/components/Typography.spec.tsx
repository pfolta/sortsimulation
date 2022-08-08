import React from "react";

import renderWithProviders from "../../utils/renderWithProviders";

import { Title, Heading, SubHeading, Paragraph } from "@/app/components/Typography";

describe("Typography", () => {
    describe("Title", () => {
        it("renders correctly", () => {
            const { asFragment } = renderWithProviders(<Title>Title</Title>);
            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe("Heading", () => {
        it("renders correctly", () => {
            const { asFragment } = renderWithProviders(<Heading>Heading</Heading>);
            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe("SubHeading", () => {
        it("renders correctly", () => {
            const { asFragment } = renderWithProviders(<SubHeading>SubHeading</SubHeading>);
            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe("Paragraph", () => {
        it("renders correctly", () => {
            const { asFragment } = renderWithProviders(<Paragraph>Paragraph</Paragraph>);
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
