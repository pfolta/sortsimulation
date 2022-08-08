import { fireEvent } from "@testing-library/react";
import React from "react";

import renderWithProviders from "../../utils/renderWithProviders";

import Modal from "@/app/components/Modal";
import "@/app/utils/Array";

describe("Modal", () => {
    it("renders correctly", () => {
        const { asFragment } = renderWithProviders(<Modal onClose={jest.fn} isOpen={true} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the modal content if the modal is opened", () => {
        const { container } = renderWithProviders(
            <Modal onClose={jest.fn} isOpen={true}>
                <section>This is the modal content.</section>
            </Modal>
        );

        expect(container).toHaveTextContent("This is the modal content.");
    });

    it("does not render the modal content if the modal is closed", () => {
        const { container } = renderWithProviders(
            <Modal onClose={jest.fn} isOpen={false}>
                <section>This is the modal content.</section>
            </Modal>
        );

        expect(container).not.toHaveTextContent("This is the modal content.");
    });

    it("clicking the 'X' button triggers the `onClose` function", () => {
        const onCloseMock = jest.fn();

        const { getByTitle } = renderWithProviders(<Modal onClose={onCloseMock} isOpen={true} />);
        fireEvent.click(getByTitle(/Close/));

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});
