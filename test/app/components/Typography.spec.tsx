import React from "react";

import renderWithProviders from "../../utils/renderWithProviders";

import { Title, Heading, SubHeading, Paragraph } from "@/app/components/Typography";

describe("Typography", () => {
    describe("Title", () => {
        it("renders correctly", () => {
            expect(renderWithProviders(<Title>Title</Title>).toJSON()).toMatchSnapshot();
        });
    });

    describe("Heading", () => {
        it("renders correctly", () => {
            expect(renderWithProviders(<Heading>Heading</Heading>).toJSON()).toMatchSnapshot();
        });
    });

    describe("SubHeading", () => {
        it("renders correctly", () => {
            expect(renderWithProviders(<SubHeading>SubHeading</SubHeading>).toJSON()).toMatchSnapshot();
        });
    });

    describe("Paragraph", () => {
        it("renders correctly", () => {
            expect(renderWithProviders(<Paragraph>Paragraph</Paragraph>).toJSON()).toMatchSnapshot();
        });
    });
});
